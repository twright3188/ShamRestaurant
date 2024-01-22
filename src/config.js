import Firebase from 'firebase';
let config = {
    apiKey: "AIzaSyC3RTdRQqiwJqW3e0xexCP4-Ys6S4qjbiU",
    authDomain: "shamrestaurant-9a192.firebaseapp.com",
    databaseURL: "https://shamrestaurant-9a192.firebaseio.com",
    projectId: "shamrestaurant-9a192",
    storageBucket: "shamrestaurant-9a192.appspot.com",
    messagingSenderId: "555122431054",
    appId: "1:555122431054:web:bb517ab430f23fd90c5f1f",
    measurementId: "G-LDLLVERR80"
};
//let app = Firebase.initializeApp(config);
export const db = app.database();