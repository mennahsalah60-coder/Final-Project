import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyA3JMJ9C0MkXb_Q0aQvr_JEoeHC1ZYtKJ8",
    authDomain: "final-project-fdeb2.firebaseapp.com",
    projectId: "final-project-fdeb2",
    storageBucket: "final-project-fdeb2.firebasestorage.app",
    messagingSenderId: "552197447614",
    appId: "1:552197447614:web:9586d43c716ce4d74263ef",
    measurementId: "G-P2DCX3JZ9Q"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);