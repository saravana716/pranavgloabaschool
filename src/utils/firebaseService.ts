import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../config/firebase';

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
 * Saves contact form data to Firestore
 * @param data - Contact form data to save
 * @returns Promise with document ID if successful
 */
export const saveContactFormData = async (data: ContactFormData): Promise<string> => {
  try {
    // Prepare data for Firestore - explicitly include all fields
    const dataToSave: any = {
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      phone: data.phone,
      subject: data.subject,
      createdAt: serverTimestamp(),
    };

    // Always include message field (even if empty)
    const messageValue = data.message !== undefined && data.message !== null 
      ? String(data.message).trim() 
      : '';
    dataToSave.message = messageValue;
    
    const docRef = await addDoc(collection(db, 'contactForms'), dataToSave);
    return docRef.id;
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
 * Saves admission application data to Firestore
 * @param data - Admission form data to save
 * @returns Promise with document ID if successful
 */
export const saveAdmissionFormData = async (data: AdmissionFormData): Promise<string> => {
  try {
    // Prepare data for Firestore - explicitly include all fields
    const dataToSave: any = {
      studentName: data.studentName,
      parentName: data.parentName,
      mobileNo: data.mobileNo,
      emailId: data.emailId,
      grade: data.grade,
      city: data.city,
      createdAt: serverTimestamp(),
    };

    // Add optional fields if they exist
    if (data.previousSchool !== undefined) {
      dataToSave.previousSchool = data.previousSchool.trim() || '';
    }
    
    if (data.message !== undefined) {
      dataToSave.message = data.message.trim() || ''; // Save message even if empty
    }
    
    if (data.recaptcha !== undefined) {
      dataToSave.recaptcha = data.recaptcha;
    }
    
    const docRef = await addDoc(collection(db, 'admissionForms'), dataToSave);
    return docRef.id;
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
 * Saves job application data to Firestore
 * @param data - Job application form data to save
 * @returns Promise with document ID if successful
 */
export const saveJobApplicationData = async (data: JobApplicationData): Promise<string> => {
  try {
    // Prepare data for Firestore - explicitly include all fields
    const dataToSave: any = {
      fullName: data.fullName,
      email: data.email,
      phone: data.phone,
      position: data.position,
      experience: data.experience,
      createdAt: serverTimestamp(),
    };

    // Add optional fields - save message/coverLetter even if empty
    if (data.coverLetter !== undefined) {
      dataToSave.coverLetter = String(data.coverLetter).trim() || '';
    }
    
    if (data.resumeFileName) {
      dataToSave.resumeFileName = data.resumeFileName;
    }
    
    if (data.resumeUrl) {
      dataToSave.resumeUrl = data.resumeUrl;
    }
    
    const docRef = await addDoc(collection(db, 'jobApplications'), dataToSave);
    return docRef.id;
  } catch (error) {
    console.error('Error saving job application data:', error);
    throw error;
  }
};
