import { supabase } from '../config/supabase';

export interface HomePageVideo {
  url: string;
  name: string;
  fullPath?: string;
  updatedAt?: any;
}

export interface HomePageBanner {
  url: string;
  name: string;
  fullPath?: string;
  updatedAt?: any;
}

/**
 * Fetches the video from Supabase homepage_settings table
 * @returns Promise with video data or null if not found
 */
export const fetchHomePageVideo = async (): Promise<HomePageVideo | null> => {
  try {
    const { data, error } = await supabase
      .from('homepage_settings')
      .select('*')
      .eq('key', 'video')
      .maybeSingle();

    if (error) throw error;

    if (data) {
      return {
        url: data.url || '',
        name: data.name || '',
        fullPath: data.full_path || '',
        updatedAt: data.updated_at
      };
    }

    return null;
  } catch (error) {
    console.error('Error fetching home page video:', error);
    throw error;
  }
};

/**
 * Fetches the banner image from Supabase homepage_settings table
 * @returns Promise with banner data or null if not found
 */
export const fetchHomePageBanner = async (): Promise<HomePageBanner | null> => {
  try {
    const { data, error } = await supabase
      .from('homepage_settings')
      .select('*')
      .eq('key', 'banner')
      .maybeSingle();

    if (error) throw error;

    if (data) {
      return {
        url: data.url || '',
        name: data.name || '',
        fullPath: data.full_path || '',
        updatedAt: data.updated_at
      };
    }

    return null;
  } catch (error) {
    console.error('Error fetching home page banner:', error);
    throw error;
  }
};
