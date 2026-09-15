'use client';

import React, { useState, useEffect, useRef, useMemo } from 'react';
import Link from 'next/link';
import { BlogService } from '@/services/blogService';
import { BlogPost } from '@/core/entities/SiteConfig';
import ThemeToggle from '@/components/ui/ThemeToggle';

// --- Types ---
type TestStatus = 'idle' | 'running' | 'completed';

interface PerformancePoint {
  time: number;
  wpm: number;
  accuracy: number;
  errors: number;
}

// --- Constants ---
const DURATIONS = [15, 30, 60, 120];
const DEFAULT_DURATION = 15;
const WPM_CONSTANT = 5; // Standard 5 chars per word

// --- Components ---

const WpmChart = ({ points }: { points: PerformancePoint[] }) => {
  if (points.length < 2) return null;

  const width = 400;
  const height = 100;
  const padding = 20;

  const maxWpm = Math.max(...points.map(p => p.wpm), 60);
  const minWpm = Math.min(...points.map(p => p.wpm), 0);
  const range = maxWpm - minWpm || 1;

  const pointsX = points.map((p, i) => {
    return (i / (points.length - 1)) * (width - 2 * padding) + padding;
  });

  const pointsY = points.map(p => {
    return height - padding - ((p.wpm - minWpm) / range) * (height - 2 * padding);
  });

  const pathD = pointsX.map((x, i) => `${i === 0 ? 'M' : 'L'} ${x} ${pointsY[i]}`).join(' ');

  return (
    <div className="w-full flex justify-center my-6 max-w-[400px] mx-auto">
      <svg
        viewBox={`0 0 ${width} ${height}`}
        className="w-full h-auto overflow-visible"
        preserveAspectRatio="xMidYMid meet"
      >
        <path
          d={pathD}
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className="text-cyan-500 dark:text-cyan-400"
          strokeLinejoin="round"
          strokeLinecap="round"
        />
        {points.map((p, i) => (
          <circle
            key={i}
            cx={pointsX[i]}
            cy={pointsY[i]}
            r="2"
            className="fill-cyan-500 dark:fill-cyan-400"
          />
        ))}
      </svg>
    </div>
  );
};

export default function TyperPage() {
  const [status, setStatus] = useState<TestStatus>('idle');
  const [text, setText] = useState('');
  const [slug, setSlug] = useState('');
  const [typedText, setTypedText] = useState('');
  const [startTime, setStartTime] = useState<number | null>(null);
  const [elapsedTime, setElapsedTime] = useState(0);
  const [duration, setDuration] = useState(DEFAULT_DURATION);
  const [language, setLanguage] = useState('english');
  const [performancePoints, setPerformancePoints] = useState<PerformancePoint[]>([]);

  const inputRef = useRef<HTMLInputElement>(null);

  // Fetch a random blog snippet on mount
  useEffect(() => {
    async function loadSnippet() {
      const posts = await BlogService.getAllPosts();
      if (posts && posts.length > 0) {
        const randomPost = posts[Math.floor(Math.random() * posts.length)];
        // Sanitize content: replace all whitespace sequences (newlines, tabs, etc.) with a single space
        const snippet = randomPost.content.replace(/\s+/g, ' ').trim().slice(0, 400);
        setText(snippet);
        setSlug(randomPost.slug);
      } else {
        setText('The quick brown fox jumps over the lazy dog. Typing is a skill that takes practice and consistency to master. Keep pushing your limits!');
        setSlug('');
      }
    }
    loadSnippet();
  }, []);

  // Calculate metrics from the current state
  const { correct, incorrect } = useMemo(() => {
    let c = 0;
    let i = 0;
    for (let j = 0; j < typedText.length; j++) {
      const typed = typedText[j].toLowerCase();
      const target = text[j]?.toLowerCase();

      // Consider any whitespace character in target as a space
      const isTargetWhitespace = target && /\s/.test(target);
      const isTypedSpace = typed === ' ';

      if (typed === target || (isTargetWhitespace && isTypedSpace)) {
        c++;
      } else {
        i++;
      }
    }
    return { correct: c, incorrect: i };
  }, [typedText, text]);

  // Timer and performance tracking
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (status === 'running') {
      interval = setInterval(() => {
        const now = Date.now();
        const diff = Math.floor((now - (startTime || now)) / 1000);

        setElapsedTime(diff);

        if (diff >= duration) {
          finishTest();
        }
      }, 100);
    }
    return () => clearInterval(interval);
  }, [status, startTime, duration]);

  // Recalculate performance points every second
  useEffect(() => {
    if (status === 'running' && elapsedTime > 0 && elapsedTime % 1 === 0) {
      const wpm = calculateWpm(correct, elapsedTime);
      const accuracy = calculateAccuracy(correct, incorrect);
      setPerformancePoints(prev => {
        if (prev.length > 0 && prev[prev.length - 1].time === elapsedTime) {
          return prev;
        }
        return [...prev, {
          time: elapsedTime,
          wpm,
          accuracy,
          errors: incorrect
        }];
      });
    }
  }, [elapsedTime, correct, incorrect, status]);

  function calculateWpm(correctCount: number, timeSec: number) {
    if (timeSec === 0) return 0;
    return Math.round((correctCount / WPM_CONSTANT) / (timeSec / 60));
  }

  function calculateAccuracy(correctCount: number, incorrectCount: number) {
    if (correctCount + incorrectCount === 0) return 100;
    return Math.round((correctCount / (correctCount + incorrectCount)) * 100);
  }

  function calculateConsistency(points: PerformancePoint[]) {
    if (points.length < 2) return 0;
    const wpms = points.map(p => p.wpm);
    const mean = wpms.reduce((a, b) => a + b, 0) / wpms.length;
    const variance = wpms.reduce((a, b) => a + Math.pow(b - mean, 2), 0) / wpms.length;
    const stdDev = Math.sqrt(variance);
    if (mean === 0) return 0;
    const cv = stdDev / mean;
    return Math.max(0, Math.min(100, Math.round((1 - cv) * 100)));
  }

  function finishTest() {
    setStatus('completed');
  }

  function resetTest() {
    setTypedText('');
    setStartTime(null);
    setElapsedTime(0);
    setPerformancePoints([]);
    setStatus('idle');
    inputRef.current?.focus();
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Tab') {
      e.preventDefault();
      resetTest();
      return;
    }

    if (e.key === 'Escape') {
      window.location.href = '/';
      return;
    }

    if (status === 'completed') {
      if (e.key === 'r' || e.key === 'R') {
        if (slug) window.location.href = `/blog/${slug}`;
      }
      return;
    }

    if (e.key.length !== 1 && e.key !== 'Backspace') return;

    if (status === 'idle') {
      setStatus('running');
      setStartTime(Date.now());
    }

    if (e.key === 'Backspace') {
      setTypedText(prev => prev.slice(0, -1));
      return;
    }

    const nextChar = text[typedText.length];
    if (!nextChar) {
      finishTest();
      return;
    }

    setTypedText(prev => prev + e.key);
  };

  const finalWpm = calculateWpm(correct, elapsedTime || duration);
  const finalRawWpm = calculateWpm(typedText.length, elapsedTime || duration);
  const finalAccuracy = calculateAccuracy(correct, incorrect);

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-[#0b0f19] text-gray-900 dark:text-gray-100 transition-colors duration-300 font-mono">
      <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-white/80 dark:bg-[#0b0f19]/80 border-b border-gray-200 dark:border-gray-800/50 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link
            href="/"
            className="font-mono text-xs text-cyan-600 dark:text-cyan-400 hover:text-gray-900 dark:hover:text-white transition-colors inline-flex items-center gap-1"
          >
            ← Back to Home
          </Link>
          <ThemeToggle />
        </div>
      </header>

      <main className="flex-1 flex flex-col justify-center items-center px-6 max-w-5xl mx-auto w-full pt-24">
        <input
          ref={inputRef}
          className="absolute opacity-0 pointer-events-none"
          onKeyDown={handleKeyDown}
          autoFocus
        />
        {status !== 'completed' ? (
          <div className="w-full max-w-4xl flex flex-col items-center space-y-12">
            <div className="flex flex-col sm:flex-row items-center justify-between w-full max-w-4xl px-4 mb-4 gap-4">
              <div className="flex items-center gap-4 p-1 bg-gray-100 dark:bg-gray-800/40 rounded-full text-xs font-mono">
                <div className="px-3 py-1 text-gray-500 dark:text-gray-400 uppercase tracking-tighter">Duration</div>
                <div className="flex gap-1">
                  {DURATIONS.map(d => (
                    <button
                      key={d}
                      onClick={() => { setDuration(d); resetTest(); }}
                      className={`px-3 py-1 rounded-full transition-all ${duration === d ? 'bg-cyan-500 text-white' : 'hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-500 dark:text-gray-400'}`}
                    >
                      {d}s
                    </button>
                  ))}
                </div>
              </div>
              {status === 'running' && (
                <div className="flex items-center gap-6 text-xs text-gray-500 dark:text-gray-400">
                  <div className="flex items-center gap-2">
                    <span className="opacity-50">wpm:</span>
                    <span className="text-cyan-500 font-bold">{calculateWpm(correct, elapsedTime)}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="opacity-50">acc:</span>
                    <span className="text-cyan-500 font-bold">{calculateAccuracy(correct, incorrect)}%</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="opacity-50">time:</span>
                    <span className="text-cyan-500 font-bold">{duration - elapsedTime}s</span>
                  </div>
                </div>
              )}
            </div>

            <div
              className="relative w-full cursor-text py-10"
              onClick={() => inputRef.current?.focus()}
            >
              <div className="text-2xl md:text-3xl leading-relaxed tracking-wide break-words relative">
                {text.split('').map((char, i) => {
                  let colorClass = 'text-gray-400 dark:text-gray-600';
                  if (i < typedText.length) {
                    const typed = typedText[i].toLowerCase();
                    const target = char.toLowerCase();
                    const isTargetWhitespace = /\s/.test(target);
                    const isTypedSpace = typed === ' ';

                    const isCorrect = typed === target || (isTargetWhitespace && isTypedSpace);

                    colorClass = isCorrect
                      ? 'text-gray-900 dark:text-gray-100'
                      : 'text-red-500 dark:text-red-400 bg-red-100 dark:bg-red-900/30';
                  } else if (i === typedText.length) {
                    colorClass = 'text-cyan-500 dark:text-cyan-400 relative';
                  }

                  return (
                    <span key={i} className={`${colorClass} transition-colors duration-100`}>
                      {char}
                      {i === typedText.length && (
                        <span className="absolute left-0 top-1 w-[2px] h-[0.8em] bg-cyan-500 dark:bg-cyan-400 animate-pulse" />
                      )}
                    </span>
                  );
                })}
              </div>
            </div>
          </div>
        ) : (
          <div className="w-full max-w-4xl animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="p-6 rounded-2xl bg-gray-100 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 text-center">
                <div className="text-xs uppercase tracking-widest text-gray-500 mb-2">WPM</div>
                <div className="text-5xl font-bold text-cyan-500">{finalWpm}</div>
              </div>
              <div className="p-6 rounded-2xl bg-gray-100 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 text-center">
                <div className="text-xs uppercase tracking-widest text-gray-500 mb-2">ACC</div>
                <div className="text-5xl font-bold text-cyan-500">{finalAccuracy}%</div>
              </div>
              <div className="p-6 rounded-2xl bg-gray-100 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 text-center">
                <div className="text-xs uppercase tracking-widest text-gray-500 mb-2">RAW</div>
                <div className="text-5xl font-bold text-cyan-500">{finalRawWpm}</div>
              </div>
            </div>

            <div className="p-8 rounded-3xl bg-gray-100 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700">
              <div className="text-center mb-6">
                <h3 className="text-sm uppercase tracking-widest text-gray-500">Performance Graph</h3>
              </div>
              <WpmChart points={performancePoints} />
              <div className="flex flex-wrap justify-center gap-8 mt-8 text-xs text-gray-500">
                <div className="flex items-center gap-2">
                  <span>Correct:</span>
                  <span className="text-gray-900 dark:text-gray-100">{correct}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span>Incorrect:</span>
                  <span className="text-red-500">{incorrect}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span>Missed:</span>
                  <span className="text-gray-900 dark:text-gray-100">{text.length - typedText.length}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span>Consistency:</span>
                  <span className="text-cyan-500">{calculateConsistency(performancePoints)}%</span>
                </div>
              </div>
            </div>

            <div className="flex justify-center gap-4 mt-12">
              <button
                onClick={resetTest}
                className="px-8 py-3 rounded-full bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-gray-100 font-bold hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors"
              >
                Restart Test
              </button>
            </div>
          </div>
        )}
      </main>

      <footer className="w-full max-w-5xl mx-auto py-12 px-6 flex flex-wrap justify-center items-center gap-6 text-[11px] text-gray-500 uppercase tracking-widest">
        <div className="flex items-center gap-2">
          <kbd className="px-1.5 py-0.5 rounded bg-gray-200 dark:bg-gray-800 text-gray-600 dark:text-gray-400">tab</kbd>
          <span>restart</span>
        </div>
        <div className="flex items-center gap-2">
          <kbd className="px-1.5 py-0.5 rounded bg-gray-200 dark:bg-gray-800 text-gray-600 dark:text-gray-400">esc</kbd>
          <span>home</span>
        </div>
        {slug && (
          <div className="flex items-center gap-2">
            <kbd className="px-1.5 py-0.5 rounded bg-gray-200 dark:bg-gray-800 text-gray-600 dark:text-gray-400">r</kbd>
            <Link href={`/blog/${slug}`} className="hover:text-cyan-500 transition-colors">
              read post
            </Link>
          </div>
        )}
      </footer>
    </div>
  );
}
