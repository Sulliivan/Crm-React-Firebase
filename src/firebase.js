import firebase from 'firebase/app';
import 'firebase/firestore';

const config = {
    apiKey: "AIzaSyCgKO7Z8iBa1BwQmA38Fkf-pAjVRj356rc",
    authDomain: "crm-react-4d9ba.firebaseapp.com",
    databaseURL: "https://crm-react-4d9ba.firebaseio.com",
    projectId: "crm-react-4d9ba",
    storageBucket: "crm-react-4d9ba.appspot.com",
    messagingSenderId: "521868781544",
    appId: "1:521868781544:web:c8ad48569148210fbc665d",
    measurementId: "G-P041GX7YEV"
};

firebase.initializeApp(config);

export default firebase;