import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { storage } from '../config/firebaseStorage';

/**
 * Uploads a resume file to Firebase Storage
 * @param file - The file to upload
 * @param applicantName - Name of the applicant (for folder organization)
 * @returns Promise with the download URL
 */
export const uploadResume = async (file: File, applicantName: string): Promise<string> => {
  try {
    // Validate file type
    if (file.type !== 'application/pdf') {
      throw new Error('Only PDF files are allowed');
    }

    // Validate file size (max 5MB)
    const maxSize = 5 * 1024 * 1024; // 5MB in bytes
    if (file.size > maxSize) {
      throw new Error('File size must be less than 5MB');
    }

    // Create a unique filename
    const timestamp = Date.now();
    const sanitizedName = applicantName.replace(/[^a-zA-Z0-9]/g, '_');
    const fileName = `resumes/${sanitizedName}_${timestamp}.pdf`;

    // Create storage reference
    const storageRef = ref(storage, fileName);

    // Upload file
    await uploadBytes(storageRef, file);

    // Get download URL
    const downloadURL = await getDownloadURL(storageRef);
    
    return downloadURL;
  } catch (error) {
    console.error('Error uploading resume:', error);
    throw error;
  }
};
