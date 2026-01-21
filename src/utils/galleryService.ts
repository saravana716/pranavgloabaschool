import { collection, getDocs, query, orderBy } from 'firebase/firestore';
import { db } from '../config/firebase';

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
 * Fetches all gallery images from Firestore database
 * @returns Promise with array of gallery images
 */
export const fetchGalleryImages = async (): Promise<GalleryImage[]> => {
  try {
    // Reference to the gallery collection in Firestore
    const galleryRef = collection(db, 'gallery');
    
    // Get all documents (try to order by createdAt if it exists, otherwise just get all)
    let querySnapshot;
    try {
      const q = query(galleryRef, orderBy('createdAt', 'desc'));
      querySnapshot = await getDocs(q);
    } catch (orderError) {
      // If ordering fails (e.g., no createdAt field), just get all documents
      querySnapshot = await getDocs(galleryRef);
    }
    
    // Map documents to GalleryImage objects
    const images: GalleryImage[] = [];
    
    querySnapshot.forEach((doc) => {
      const data = doc.data();
      
      // Parse createdAt timestamp
      let createdAtDate: Date | undefined;
      if (data.createdAt) {
        if (data.createdAt.seconds) {
          createdAtDate = new Date(data.createdAt.seconds * 1000);
        } else if (data.createdAt.toDate) {
          createdAtDate = data.createdAt.toDate();
        } else if (data.createdAt instanceof Date) {
          createdAtDate = data.createdAt;
        }
      }
      
      // Normalize category to lowercase for consistent filtering
      const categoryValue = data.category 
        ? String(data.category).toLowerCase().trim() 
        : 'all';
      
      images.push({
        id: doc.id,
        url: data.url || '',
        name: data.name || '',
        category: categoryValue, // Normalized to lowercase
        title: data.title || data.name || '',
        date: data.date || (createdAtDate ? createdAtDate.toLocaleDateString('en-US', { month: 'long', year: 'numeric' }) : undefined),
        description: data.description || '',
        createdAt: data.createdAt
      });
    });
    
    // Sort by creation date if available (newest first)
    images.sort((a, b) => {
      if (!a.createdAt || !b.createdAt) return 0;
      const aTime = a.createdAt.seconds ? a.createdAt.seconds * 1000 : (a.createdAt.toDate ? a.createdAt.toDate().getTime() : 0);
      const bTime = b.createdAt.seconds ? b.createdAt.seconds * 1000 : (b.createdAt.toDate ? b.createdAt.toDate().getTime() : 0);
      return bTime - aTime;
    });
    
    return images;
  } catch (error) {
    console.error('Error fetching gallery images from Firestore:', error);
    throw error;
  }
};
