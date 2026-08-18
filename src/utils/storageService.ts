import { supabase, BUCKET_NAME } from '../config/supabase';

/**
 * Uploads a resume file to Supabase Storage
 * @param file - The file to upload
 * @param applicantName - Name of the applicant (for folder organization)
 * @returns Promise with the public download URL
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

    // Upload to Supabase Storage
    const { error: uploadError } = await supabase.storage
      .from(BUCKET_NAME)
      .upload(fileName, file, { cacheControl: '3600', upsert: true });

    if (uploadError) throw uploadError;

    // Get Public URL
    const { data: urlData } = supabase.storage
      .from(BUCKET_NAME)
      .getPublicUrl(fileName);
    
    return urlData.publicUrl;
  } catch (error) {
    console.error('Error uploading resume:', error);
    throw error;
  }
};
