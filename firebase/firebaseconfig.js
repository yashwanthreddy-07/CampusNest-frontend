// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
    apiKey: "AIzaSyAMgCOHD5r3g1AbgCEIupnQEU8qB_5-Ajs",
    authDomain: "campusnest-250d8.firebaseapp.com",
    projectId: "campusnest-250d8",
    storageBucket: "campusnest-250d8.appspot.com",
    messagingSenderId: "704713495047",
    appId: "1:704713495047:web:b7eedce6e098d6bfbf50a2",
    measurementId: "G-ZFFC8Q52PX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export default app;
