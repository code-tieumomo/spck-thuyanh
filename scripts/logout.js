// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import {
  getAuth,
  signOut
} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD_85qtjl7eP_If6pK8eiMTcYbA7_hPC7c",
  authDomain: "antet-cc8e3.firebaseapp.com",
  projectId: "antet-cc8e3",
  storageBucket: "antet-cc8e3.appspot.com",
  messagingSenderId: "773769450950",
  appId: "1:773769450950:web:308aeeb3ba933501160ec7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

if (document.querySelector("#logout")) {
  document.querySelector("#logout").addEventListener("click", () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        localStorage.removeItem("user");
        window.location.href = "/index.html";
      })
      .catch((error) => {
        // An error happened.
      });
  });
}
