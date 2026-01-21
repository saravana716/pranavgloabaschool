import { initializeApp, getApps } from 'firebase/app';
import { getStorage } from 'firebase/storage';

// Separate Firebase config for file uploads only
const firebaseStorageConfig = {
  apiKey: "AIzaSyD1JxUUTKta_i0vUaYMx8vxJu7sBFTq3LY",
  authDomain: "datastore-4c889.firebaseapp.com",
  projectId: "datastore-4c889",
  storageBucket: "datastore-4c889.appspot.com",
  messagingSenderId: "894842595998",
  appId: "1:894842595998:web:8902e80ecdf7b59d65a98f"
};

// Initialize Firebase for Storage (with a unique name to avoid conflicts)
let storageApp;
const apps = getApps();
const existingApp = apps.find(app => app.name === 'storage');
if (existingApp) {
  storageApp = existingApp;
} else {
  storageApp = initializeApp(firebaseStorageConfig, 'storage');
}

// Initialize Firebase Storage
export const storage = getStorage(storageApp);

export default storageApp;
