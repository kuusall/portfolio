import { supabase } from './supabase';
import { BlogPost } from '@/core/entities/SiteConfig';

export const BlogService = {
  async getAllPosts(limit?: number): Promise<BlogPost[]> {
    if (!supabase) {
      console.warn('BlogService: Supabase client not initialized.');
      return [];
    }


    let query = supabase
      .from('posts')
      .select('*')
      .order('published_at', { ascending: false, nullsFirst: false });

    if (limit) {
      query = query.limit(limit);
    }

    const { data, error } = await query;

    if (error) {
      console.error('BlogService: Error fetching blog posts:', error);
      return [];
    }

    return data as BlogPost[];
  },

  async getPostBySlug(slug: string): Promise<BlogPost | null> {
    if (!supabase) return null;
    const { data, error } = await supabase
      .from('posts')
      .select('*')
      .eq('slug', slug)
      .single();

    if (error || !data) {
      console.error('BlogService: Error fetching blog post by slug:', error);
      return null;
    }

    return data as BlogPost;
  },
};
