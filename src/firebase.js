import firebase from "firebase";

const firebaseApp = firebase.initializeApp(
    {
        apiKey: "AIzaSyD14_hoy9mc-t4w-_LY485wUnydMhP8h5M",
        authDomain: "instagram-clone-react-fc911.firebaseapp.com",
        databaseURL: "https://instagram-clone-react-fc911.firebaseio.com",
        projectId: "instagram-clone-react-fc911",
        storageBucket: "instagram-clone-react-fc911.appspot.com",
        messagingSenderId: "654908245196",
        appId: "1:654908245196:web:fe894aec007b2e3c4f2e69",
        measurementId: "G-TJ3JL3M0HL"
      }
);


  const db= firebaseApp.firestore();
  const auth =firebase.auth();
  const storage= firebase.storage();


  export {db,auth, storage};