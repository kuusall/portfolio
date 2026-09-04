import { supabase } from './supabase';
import { Project } from '@/core/entities/SiteConfig';

export const ProjectService = {
  async getAllProjects(): Promise<Project[]> {
    if (!supabase) {
      console.warn('Supabase client not initialized. Returning empty projects list.');
      return [];
    }
    const { data, error } = await supabase
      .from('projects')
      .select('*')
      .order('order', { ascending: true });

    if (error) {
      console.error('Error fetching projects:', error);
      return [];
    }

    return data as Project[];
  },
};
