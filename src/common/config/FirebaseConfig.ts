import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use

const firebaseConfig = {
    apiKey: "AIzaSyBU4cGb_20C5Bgdzn84EYnJeoPuXHcBG0k",
    authDomain: "software-6fe3c.firebaseapp.com",
    projectId: "software-6fe3c",
    storageBucket: "software-6fe3c.appspot.com",
    messagingSenderId: "995044241722",
    appId: "1:995044241722:web:c2bd138acdf79d0c936003",
    measurementId: "G-29FDZQERRL"
  };
// Initialize Firebase
const app = initializeApp(firebaseConfig);
//export const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const firestore = getFirestore(app);

