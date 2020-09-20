import firebase from 'firebase/app';

import 'firebase/firestore';
import 'firebase/auth';


const config= {
    apiKey: "AIzaSyAtXJZdJRQ9sRmXT2qHcc4wm3GxJy7ODxE",
    authDomain: "crwn-db-e27fd.firebaseapp.com",
    databaseURL: "https://crwn-db-e27fd.firebaseio.com",
    projectId: "crwn-db-e27fd",
    storageBucket: "crwn-db-e27fd.appspot.com",
    messagingSenderId: "321781886387",
    appId: "1:321781886387:web:4032f4d2b6602e694b2fc6",
    measurementId: "G-TMM7JX3KWV"
  }


  export const createUserProfileDocument = async( userAuth , additionalData )=>{

    if( !userAuth ) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if(! snapShot.exists){
      const {displayName , email} = userAuth ;

      const createAt = new Date();

      try{
        await userRef.set({
          displayName , 
          email , 
          createAt , 
          ...additionalData
        })
      }catch(err){
        console.log('error Creating User' , err.message);
      }
    }

    return userRef;

  }


  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();

  provider.setCustomParameters({ prompt:'select_account' });

  export const signInWithGoogle = ()=> auth.signInWithPopup(provider)

  export default firebase;