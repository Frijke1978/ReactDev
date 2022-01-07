import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
    apiKey: "AIzaSyDkXEi3YPy1f44YYf0PTqCHG3O0pTsUoek",
    authDomain: "crwn-db-74256.firebaseapp.com",
    projectId: "crwn-db-74256",
    storageBucket: "crwn-db-74256.appspot.com",
    messagingSenderId: "410318903005",
    appId: "1:410318903005:web:b382243b004fd4239c6d34",
    measurementId: "G-GZVDKPB7PH"
};
  
firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;