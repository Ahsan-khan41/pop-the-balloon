const firebaseConfig = {
  apiKey: "AIzaSyDXcWrioLb_2vIA2JDFGDG_1SN8QlFVN-Y",
  authDomain: "pop-the-balloon-8b8c9.firebaseapp.com",
  projectId: "pop-the-balloon-8b8c9",
  storageBucket: "pop-the-balloon-8b8c9.appspot.com",
  messagingSenderId: "985337634498",
  appId: "1:985337634498:web:5c4d491ff4da9baed0255b",
  measurementId: "G-G2SB83GCGL",
};

// Initialize Firebase
var app = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = app.firestore();

var provider = new firebase.auth.GoogleAuthProvider();

function signIn() {
  firebase
    .auth()
    .signInWithPopup(provider)
    .then(() => {
      // showUserData (result.user)
      // console.log(userEmail);
      // console.log(userName);
      location.replace("./main-src/level-1.html");
      // console.log("Signed In!");
    })
    .catch((error) => {
      console.log(error);
    });
}

function signOut() {
  firebase
    .auth()
    .signOut()
    .then(() => {
      location.replace("./index.html");
    });
}

// firebase.auth().onAuthStateChanged((user) => {
//   if (user) {

//   } else {
//     location.replace("../sign up/index.html");
//   }
// });

function showUserData() {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      console.log(user);
      let userName = document.getElementById("nameDiv");
      userName.innerText = user.displayName;
      let userEmail = document.getElementById("emailDiv");
      userEmail.innerHTML = user.email;
    } else {
      signOut();
    }
  });
}
