// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-analytics.js";

// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAgcj_utGKxLLATg1I6nNsipzmXbjyvIO4",
    authDomain: "whimish-beings.firebaseapp.com",
    projectId: "whimish-beings",
    storageBucket: "whimish-beings.firebasestorage.app",
    messagingSenderId: "498172548190",
    appId: "1:498172548190:web:e4143f14c636c52db210cf",
    measurementId: "G-HQXEM31GS3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);