
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA-ZTMWEotmg2RreLhKxwQkPU5TJGPL1ok",
  authDomain: "msg-app-5219b.firebaseapp.com",
  projectId: "msg-app-5219b",
  storageBucket: "msg-app-5219b.appspot.com",
  messagingSenderId: "299605887574",
  appId: "1:299605887574:web:655e90f5f328cc9c2789f7",
  measurementId: "G-39GK504SVK"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export { auth, analytics, app }
