import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyC7FU5XJI9pYB1deBwPmaj0wSlGNoExmAM",
  authDomain: "crwn-db-e3a69.firebaseapp.com",
  databaseURL: "https://crwn-db-e3a69.firebaseio.com",
  projectId: "crwn-db-e3a69",
  storageBucket: "crwn-db-e3a69.appspot.com",
  messagingSenderId: "569028682497",
  appId: "1:569028682497:web:b62e98c2960188f6263100",
  measurementId: "G-H8JHB0L27E"
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log("error creatin user");
    }
  }

  return userRef;
};

export const convertDataFromFirestore = data => {
  const transformedData = data.docs.map(doc => {
    const { title, items } = doc.data();

    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items
    };
  });

  return transformedData.reduce(
    (acc, data) => {
      acc[data.title.toLowerCase()] = data;
      return acc;
    },

    {}
  );
};

export const checkUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = auth.onAuthStateChanged(userAuth => {
      unsubscribe();

      resolve(userAuth);
    }, reject);
  });
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const googleProvider = new firebase.auth.GoogleAuthProvider();

googleProvider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

export default firebase;
