// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { initializeAuth } from "firebase/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { collection, getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBgF-2VmGsCcM4uV5t4hmZnu97LQ0fsYnA",
  authDomain: "chatmobileapp-65240.firebaseapp.com",
  projectId: "chatmobileapp-65240",
  storageBucket: "chatmobileapp-65240.appspot.com",
  messagingSenderId: "183188804048",
  appId: "1:183188804048:web:855e7d5e6a890f55a7a9d5",
  measurementId: "G-23VRNXR77B"
};


const app = initializeApp(firebaseConfig);
export const auth = initializeAuth(app, {
    persistence: getReactNativePersistence(AsyncStorage)
});
export const db = getFirestore(app);
export const userRef = collection(db, "users");
export const roomRef = collection(db, "rooms");