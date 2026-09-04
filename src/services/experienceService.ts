import { supabase } from './supabase';
import { ExperienceItem, Award } from '@/core/entities/SiteConfig';

export const ExperienceService = {
  async getAllExperience(): Promise<ExperienceItem[]> {
    if (!supabase) {
      console.warn('Supabase client not initialized. Returning empty experience list.');
      return [];
    }
    const { data, error } = await supabase
      .from('experience')
      .select('*')
      .order('order', { ascending: true });

    if (error) {
      console.error('Error fetching experience:', error);
      return [];
    }

    // Map snake_case from DB to camelCase for the frontend
    return (data as any[]).map(item => ({
      ...item,
      isHighlighted: item.is_highlighted
    })) as ExperienceItem[];
  },
};

export const AwardService = {
  async getAllAwards(): Promise<Award[]> {
    if (!supabase) {
      console.warn('Supabase client not initialized. Returning empty awards list.');
      return [];
    }
    const { data, error } = await supabase
      .from('awards')
      .select('*')
      .order('order', { ascending: true });

    if (error) {
      console.error('Error fetching awards:', error);
      return [];
    }

    return data as Award[];
  },
};
