import { doc, getDoc } from 'firebase/firestore';
import { db } from '../config/firebase';

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
 * Fetches the video from Firestore homePage collection
 * @returns Promise with video data or null if not found
 */
export const fetchHomePageVideo = async (): Promise<HomePageVideo | null> => {
  try {
    const videoDocRef = doc(db, 'homePage', 'video');
    const videoDoc = await getDoc(videoDocRef);

    if (videoDoc.exists()) {
      const data = videoDoc.data();
      return {
        url: data.url || '',
        name: data.name || '',
        fullPath: data.fullPath || '',
        updatedAt: data.updatedAt
      };
    }

    return null;
  } catch (error) {
    console.error('Error fetching home page video:', error);
    throw error;
  }
};

/**
 * Fetches the banner image from Firestore homePage collection
 * @returns Promise with banner data or null if not found
 */
export const fetchHomePageBanner = async (): Promise<HomePageBanner | null> => {
  try {
    const bannerDocRef = doc(db, 'homePage', 'banner');
    const bannerDoc = await getDoc(bannerDocRef);

    if (bannerDoc.exists()) {
      const data = bannerDoc.data();
      return {
        url: data.url || '',
        name: data.name || '',
        fullPath: data.fullPath || '',
        updatedAt: data.updatedAt
      };
    }

    return null;
  } catch (error) {
    console.error('Error fetching home page banner:', error);
    throw error;
  }
};
