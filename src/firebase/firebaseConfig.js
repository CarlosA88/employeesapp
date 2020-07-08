import firebase from "firebase/app";
import "firebase/database";
import "firebase/firestore";
import "firebase/auth";
import "firebase/storage";

//Api endpoint https://employees-83f9f.firebaseio.com/employees/
const firebaseConfig = {
  apiKey: "***",
  authDomain: "***",
  databaseURL: "***",
  projectId: "***",
  storageBucket: "***",
  messagingSenderId: "***",
  appId: "***",
  measurementId: "***",
};

firebase.initializeApp(firebaseConfig);
var db = firebase.firestore();
var employeesRef = db.collection("employees");
employeesRef.get().then((querySnapshot) => {
  querySnapshot.forEach((doc) => {
    console.log(`${doc.id}`);
  });
});

export default firebase;
