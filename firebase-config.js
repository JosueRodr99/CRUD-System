
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-analytics.js";
  import { getFirestore } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-firestore.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyCIncBk2QQH-j0eaYrIFMHIYkCO5nlqtmU",
    authDomain: "project-it-f7ade.firebaseapp.com",
    projectId: "project-it-f7ade",
    storageBucket: "project-it-f7ade.appspot.com",
    messagingSenderId: "1009614437786",
    appId: "1:1009614437786:web:20ff37300593e8c055ce23",
    measurementId: "G-3S1VE96TT5"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  const db = getFirestore(app);

  export { db,analytics, app };