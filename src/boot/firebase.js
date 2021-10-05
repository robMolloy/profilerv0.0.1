// Firebase App (the core Firebase SDK) is always required and must be listed first
import firebase from "firebase/app";
// If you are using v7 or any earlier version of the JS SDK, you should import firebase using namespace import
// import * as firebase from "firebase/app"

// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

import firebaseConfig from "../config/firebaseConfig";

// Initialize Firebase
let firebaseApp = firebase.initializeApp(firebaseConfig);
let firebaseAuth = firebaseApp.auth();

let db = firebaseApp.firestore();
db.settings({ timestampsInSnapshots: true, enablePersistence: true });

let storage = firebase.storage();

// window.db = db;
// window.firebaseAuth = firebaseAuth;

export { firebaseAuth, db, storage };
