import  firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCSZF2AbZjuMQg-KvLA3lXEa-HVKDTeUtU",
  authDomain: "anti-kidnapping-app-423fe.firebaseapp.com",
  projectId: "anti-kidnapping-app-423fe",
  storageBucket: "anti-kidnapping-app-423fe.appspot.com",
  messagingSenderId: "74674889090",
  appId: "1:74674889090:web:6ce5426d103a2e18a96f9b"
};
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} 


export default firebase.auth()

