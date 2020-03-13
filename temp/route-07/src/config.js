import * as firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDVoKfNlowj0vO7dgAfY5cgCxw7mimVHew",
  authDomain: "my-app-firebase-b532d.firebaseapp.com",
  databaseURL: "https://my-app-firebase-b532d.firebaseio.com",
  projectId: "my-app-firebase-b532d",
  storageBucket: "my-app-firebase-b532d.appspot.com",
  messagingSenderId: "529489181358",
  appId: "1:529489181358:web:717857db5df9e3bc578b3f"
};
// Initialize Firebase
export default firebase.initializeApp(firebaseConfig);
