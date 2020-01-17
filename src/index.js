import { router } from './utils/router.js'

const init = () => {

const firebaseConfig = {
  apiKey: "AIzaSyDEAtw5wa3Auz7MzsBI1eS0oX-md1RE9yA",
  authDomain: "social-network-eedc8.firebaseapp.com",
  databaseURL: "https://social-network-eedc8.firebaseio.com",
  projectId: "social-network-eedc8",
  storageBucket: "social-network-eedc8.appspot.com",
  messagingSenderId: "378714099666",
  appId: "1:378714099666:web:56769efd615e9c6926820b",
  measurementId: "G-CJK45C4SQ1"
};
firebase.initializeApp(firebaseConfig);
router(window.location.hash)

// Get elements
const txtEmail = document.getElementById("txtEmail");
const txtPassword = document.getElementById("txtPassword");
const btnLogin = document.getElementById("btnLogin");
const btnSignUp = document.getElementById("btnSignUp");
const googleSignIn = document.getElementById("googleSignIn");
const githubSignIn = document.getElementById("githubSignIn");

// add login event
btnLogin.addEventListener("click", e => {
  e.preventDefault()
  console.log("acá")
  // get email and pass
  const email = txtEmail.value;
  const pass = txtPassword.value;
  const auth = firebase.auth();

  // sing in
  const promise = auth.signInWithEmailAndPassword(email, pass);
  promise.then((data) => {
    console.log(data)
    window.location.hash = '#/welcome'
  }).catch(e => console.log(e.message));
});

// login with Google
googleSignIn.addEventListener("click", (e) => {
  e.preventDefault()
  const baseProvider = new firebase.auth.GoogleAuthProvider();
  firebase
    .auth()
    .signInWithPopup(baseProvider)
    .then((result) => {
      console.log(result);
      console.log("Success Google linked");
      window.location.hash = '#/welcome'
    })
    .catch((err) => console.log(err));
});

// login with GitHub
githubSignIn.addEventListener("click", (e) => {
  e.preventDefault();
  console.log("clickeado")
  const providerGit = new firebase.auth.GithubAuthProvider();
  firebase.auth().signInWithPopup(providerGit).then(function(result){
      console.log(result);
      console.log("Success GitHub linked");
      window.location.hash = '#/welcome'
  }).catch(function(error) {
      console.log(error);
  });
});

// add register event
btnSignUp.addEventListener("click", e => {
  e.preventDefault()
  window.location.hash = '#/signup'
});


// Main page

const btnLogout = document.getElementById("btnLogout");

btnLogout.addEventListener("click", e => {
  firebase.auth().signOut(() => {
    window.location.hash = '#/welcome'
  }).catch()
});



};

window.addEventListener('hashchange', () => {
  console.log("sisssss?")
  router(window.location.hash);
});
  
window.addEventListener('load', init);
