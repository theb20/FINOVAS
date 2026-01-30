import { initializeApp, getApps } from "firebase/app";
import { getAnalytics, isSupported } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAFNL0zkpa3xgg1QyHlnl7FVbjamkoV9ds",
  authDomain: "finovas.firebaseapp.com",
  projectId: "finovas",
  storageBucket: "finovas.firebasestorage.app",
  messagingSenderId: "1044457192123",
  appId: "1:1044457192123:web:d72e98c41928d04fe6c79e",
  measurementId: "G-6ECMN2K8HZ"
};

const app = getApps().length ? getApps()[0] : initializeApp(firebaseConfig);

let analytics;
if (typeof window !== "undefined") {
  isSupported().then((supported) => {
    if (supported) {
      analytics = getAnalytics(app);
    }
  }).catch(() => {});
}

export { app, analytics };

