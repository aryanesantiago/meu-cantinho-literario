
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import AsyncStorage from '@react-native-async-storage/async-storage';

const firebaseConfig = {
  apiKey: "AIzaSyC_GOo2G6eUNQQNtMQRMDz4qiMb6OLTQg8",
  authDomain: "meu-cantinho-literario.firebaseapp.com",
  projectId: "meu-cantinho-literario",
  storageBucket: "meu-cantinho-literario.firebasestorage.app",
  messagingSenderId: "957199187566",
  appId: "1:957199187566:web:0a5e25a0ccc913971e707f",
};

const app = initializeApp(firebaseConfig);

export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});

export const db = getFirestore(app);
