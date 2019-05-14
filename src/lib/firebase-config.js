import * as firebase from "firebase";


const sgcmConfig = {
  apiKey: "AIzaSyB56ioY462z_di4VfGBz8fvYUMuFq8pMM0",
  authDomain: "trukkr-3b71c.firebaseapp.com",
  databaseURL: "https://trukkr-3b71c.firebaseio.com",
  projectId: "trukkr-3b71c",
  storageBucket: "trukkr-3b71c.appspot.com",
  messagingSenderId: "860926392612"
};

export default firebase.initializeApp(sgcmConfig);
