// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase"

const firebaseConfig = {
    apiKey: "AIzaSyAMzr0qJfNxT7s7BN0rONwNq7axgDTuWA0",
    authDomain: "facebook-clone-f1062.firebaseapp.com",
    projectId: "facebook-clone-f1062",
    storageBucket: "facebook-clone-f1062.appspot.com",
    messagingSenderId: "17432554706",
    appId: "1:17432554706:web:c6ca414d00f200137f910b",
    measurementId: "G-7Q7LZ6SEYS"
  };

  const firebaseApp=firebase.initializeApp(firebaseConfig);
  const db=firebaseApp.firestore();
  const auth=firebase.auth();
  const provider=new firebase.auth.GoogleAuthProvider();

  export {auth, provider};
  export default db;