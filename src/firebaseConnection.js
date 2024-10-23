
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"; 


const firebaseConfig = {
  apiKey: "AIzaSyDb6RyZN9rxzwcugIMwNBodVfMWYlZqkJE",
  authDomain: "uxshare-ff27b.firebaseapp.com",
  projectId: "uxshare-ff27b",
  storageBucket: "uxshare-ff27b.appspot.com",
  messagingSenderId: "313522383968",
  appId: "1:313522383968:web:154f374ae8691dd8dfe705",
  measurementId: "G-VW73VPDN7P"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app); 
const db = getFirestore(app); 

export { db }; 
