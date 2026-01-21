import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyA1mtHVRk0TyWhGFc50JGfVMsFK4tLoxWg",
  authDomain: "pranav-global-school---pgs.firebaseapp.com",
  projectId: "pranav-global-school---pgs",
  storageBucket: "pranav-global-school---pgs.firebasestorage.app",
  messagingSenderId: "1052193372039",
  appId: "1:1052193372039:web:f38831d3dbf591eee7c522"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
export const db = getFirestore(app);

export default app;
