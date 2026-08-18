import { supabase } from '../config/supabase';

export interface GalleryImage {
  id: string;
  url: string;
  name: string;
  category: string; // Required category field
  title?: string;
  date?: string;
  description?: string;
  createdAt?: any;
}

/**
 * Fetches all gallery images from Supabase database
 * @returns Promise with array of gallery images
 */
export const fetchGalleryImages = async (): Promise<GalleryImage[]> => {
  try {
    const { data, error } = await supabase
      .from('gallery')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) throw error;
    
    // Map database rows to GalleryImage objects
    const images: GalleryImage[] = (data || []).map((row: any) => {
      // Parse created_at timestamp
      const createdAtDate = row.created_at ? new Date(row.created_at) : undefined;
      
      // Normalize category to lowercase for consistent filtering
      const categoryValue = row.category 
        ? String(row.category).toLowerCase().trim() 
        : 'all';
      
      return {
        id: row.id,
        url: row.url || '',
        name: row.name || '',
        category: categoryValue, // Normalized to lowercase
        title: row.name || '',
        date: createdAtDate ? createdAtDate.toLocaleDateString('en-US', { month: 'long', year: 'numeric' }) : undefined,
        description: '',
        createdAt: row.created_at
      };
    });
    
    return images;
  } catch (error) {
    console.error('Error fetching gallery images from Supabase:', error);
    throw error;
  }
};
