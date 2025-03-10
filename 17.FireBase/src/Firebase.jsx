import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAJrqJlGjFDd6Z-xT5Sjjp0tAQnMUxB3bU",
  authDomain: "fir-learning-72896.firebaseapp.com",
  projectId: "fir-learning-72896",
  storageBucket: "fir-learning-72896.firebasestorage.app",
  messagingSenderId: "326671042402",
  appId: "1:326671042402:web:ef5b77100b07b9b52e8e3b",
};

export const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
