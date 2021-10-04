import { initializeApp } from "firebase/app";
import secrets from "./secrets.json";

// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: secrets.apiKey,
    authDomain: secrets.authDomain,
    projectId: secrets.projectId,
    storageBucket: secrets.storageBucket,
    messagingSenderId: secrets.messagingSenderId,
    appId: secrets.appId,
    measurementId: secrets.measurementId,
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);
export default firebase;
