// firebase-config.js

// Firebase CDN ile bağlantı kurulduktan sonra:
const firebaseConfig = {
  apiKey: "AIzaSyAsbrLS30RV23Zv-RmPTYhIg-nb6LZ9Cuk",
  authDomain: "reqsa-chai-ffb4e.firebaseapp.com",
  projectId: "reqsa-chai-ffb4e",
  storageBucket: "reqsa-chai-ffb4e.appspot.com",
  messagingSenderId: "346548059532",
  appId: "1:346548059532:web:932f43d47c65ca8bb2aaa9"
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();