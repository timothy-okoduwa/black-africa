// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyD7hsAVyAH-DCZDriRdOfrBhKqGYpD1nHk',
  authDomain: 'black-waitlist.firebaseapp.com',
  projectId: 'black-waitlist',
  storageBucket: 'black-waitlist.appspot.com',
  messagingSenderId: '1092195930773',
  appId: '1:1092195930773:web:afa80dc81af7cb3438419c',
  measurementId: 'G-Q04P9JS6Z1',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export default app;
