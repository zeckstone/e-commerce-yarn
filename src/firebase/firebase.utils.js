import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAyMfhyfCYtQJhz23lwqPe8aR4K0NsBYYU",
    authDomain: "e-commerce-yarn.firebaseapp.com",
    projectId: "e-commerce-yarn",
    storageBucket: "e-commerce-yarn.appspot.com",
    messagingSenderId: "567034302665",
    appId: "1:567034302665:web:274f087e237fa070487d18",
    measurementId: "G-349MKF08PH"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;