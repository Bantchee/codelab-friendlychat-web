/**
 * To find your Firebase config object:
 * 
 * 1. Go to your [Project settings in the Firebase console](https://console.firebase.google.com/project/_/settings/general/)
 * 2. In the "Your apps" card, select the nickname of the app for which you need a config object.
 * 3. Select Config from the Firebase SDK snippet pane.
 * 4. Copy the config object snippet, then add it here.
 */

// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const config = {
  apiKey: "AIzaSyBgQByqmCXdpVfpwqrYtA7ydhRbkNzBdbk",
  authDomain: "friendlychat-d2ed7.firebaseapp.com",
  projectId: "friendlychat-d2ed7",
  storageBucket: "friendlychat-d2ed7.appspot.com",
  messagingSenderId: "880780829322",
  appId: "1:880780829322:web:3afd2a42b135195a7b4373"
};

// Initialize Firebase
//const app = initializeApp(config);

export function getFirebaseConfig() {
  if (!config || !config.apiKey) {
    throw new Error('No Firebase configuration object provided.' + '\n' +
    'Add your web app\'s configuration object to firebase-config.js');
  } else {
    return config;
  }
}