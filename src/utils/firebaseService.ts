import { supabase } from '../config/supabase';

export interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  subject: string;
  message?: string;
  createdAt?: any;
}

/**
 * Saves contact form data to Supabase
 * @param data - Contact form data to save
 * @returns Promise with document ID if successful
 */
export const saveContactFormData = async (data: ContactFormData): Promise<string> => {
  try {
    const { data: inserted, error } = await supabase
      .from('contact_messages')
      .insert({
        first_name: data.firstName,
        last_name: data.lastName,
        email: data.email,
        subject: data.subject,
        message: data.message || ''
      })
      .select('id')
      .single();

    if (error) throw error;
    return inserted ? inserted.id : '';
  } catch (error) {
    console.error('Error saving contact form data:', error);
    throw error;
  }
};

// Admission Form Interfaces and Functions
export interface AdmissionFormData {
  studentName: string;
  parentName: string;
  mobileNo: string;
  emailId: string;
  grade: string;
  city: string;
  previousSchool?: string;
  message?: string;
  recaptcha?: boolean;
  createdAt?: any;
}

/**
 * Saves admission application data to Supabase
 * @param data - Admission form data to save
 * @returns Promise with document ID if successful
 */
export const saveAdmissionFormData = async (data: AdmissionFormData): Promise<string> => {
  try {
    const { data: inserted, error } = await supabase
      .from('admission_applications')
      .insert({
        student_name: data.studentName,
        parent_name: data.parentName,
        email: data.emailId,
        phone: data.mobileNo,
        grade: data.grade,
        city: data.city,
        previous_school: data.previousSchool || '',
        message: data.message || ''
      })
      .select('id')
      .single();

    if (error) throw error;
    return inserted ? inserted.id : '';
  } catch (error) {
    console.error('Error saving admission form data:', error);
    throw error;
  }
};

// Career/Job Application Interfaces and Functions
export interface JobApplicationData {
  fullName: string;
  email: string;
  phone: string;
  position: string;
  experience: string;
  coverLetter?: string; // Optional cover letter
  resumeFileName?: string; // Store filename instead of File object
  resumeUrl?: string; // Store Firebase Storage download URL
  createdAt?: any;
}

/**
 * Saves job application data to Supabase
 * @param data - Job application form data to save
 * @returns Promise with document ID if successful
 */
export const saveJobApplicationData = async (data: JobApplicationData): Promise<string> => {
  try {
    const { data: inserted, error } = await supabase
      .from('job_applications')
      .insert({
        name: data.fullName,
        email: data.email,
        phone: data.phone,
        position: data.position,
        cover_letter: data.coverLetter || '',
        resume_url: data.resumeUrl || ''
      })
      .select('id')
      .single();

    if (error) throw error;
    return inserted ? inserted.id : '';
  } catch (error) {
    console.error('Error saving job application data:', error);
    throw error;
  }
};
