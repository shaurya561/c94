var firebaseConfig = {
    apiKey: "AIzaSyAxx1r7IOhkyRBk6DH4CYFB2i74w14eoZE",
    authDomain: "c93-practice.firebaseapp.com",
    databaseURL: "https://c93-practice-default-rtdb.firebaseio.com",
    projectId: "c93-practice",
    storageBucket: "c93-practice.appspot.com",
    messagingSenderId: "911875630961",
    appId: "1:911875630961:web:bdc9da0128955abbd978d0"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

function addUser() {
    user_name=document.getElementById("user_name").value
    firebase.database().ref("/").child(user_name).update({
        purpose:"addinguser"
    });
}