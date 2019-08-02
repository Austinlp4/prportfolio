import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyBe3nbH3DOWDC3eClgfdYhJQLomIo4JIOM",
    authDomain: "philrportfolio.firebaseapp.com",
    databaseURL: "https://philrportfolio.firebaseio.com",
    projectId: "philrportfolio",
    storageBucket: "philrportfolio.appspot.com",
    messagingSenderId: "895801161471",
    appId: "1:895801161471:web:548f96bb9a85b9ff"
};

firebase.initializeApp(config);

export const storage = firebase.storage();

export default firebase;