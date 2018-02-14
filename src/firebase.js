import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyAOna02qveF0r-YeO2CIbDZC1l_Y01aOC4",
    authDomain: "react-firebase-authentic-46b68.firebaseapp.com",
    databaseURL: "https://react-firebase-authentic-46b68.firebaseio.com",
    projectId: "react-firebase-authentic-46b68",
    storageBucket: "react-firebase-authentic-46b68.appspot.com",
    messagingSenderId: "223755669595"
};

export const firebaseApp = firebase.initializeApp(config);
export const jobRef = firebase.database().ref('jobs');