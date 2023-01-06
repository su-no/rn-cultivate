import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCDefBq42k0E5X25BbcuChlCUh30zixhhI',
  authDomain: 'react-native-todolist-4aa67.firebaseapp.com',
  projectId: 'react-native-todolist-4aa67',
  storageBucket: 'react-native-todolist-4aa67.appspot.com',
  messagingSenderId: '303354519638',
  appId: '1:303354519638:web:a50000ae5d692d25465bf7',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const dbService = getFirestore(app);
export const authService = getAuth(app);
