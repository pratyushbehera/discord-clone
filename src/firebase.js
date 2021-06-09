import firebase from 'firebase';
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDuGGZIE3TzFO16nZFlUyljhPWmcPuKk9g",
    authDomain: "discord-clone-7bc40.firebaseapp.com",
    projectId: "discord-clone-7bc40",
    storageBucket: "discord-clone-7bc40.appspot.com",
    messagingSenderId: "421129527143",
    appId: "1:421129527143:web:7ae9ba6dd9ea53c11659c2",
    measurementId: "G-EVJ7T81YPJ"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const provider = new firebase.auth.GoogleAuthProvider();


export { auth, provider };
export default db;