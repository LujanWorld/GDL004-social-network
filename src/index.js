import { router } from './utils/router.js'

const init = () => {
    const firebaseConfig = {
    apiKey: "AIzaSyC4CBZh5QZ0AfGTXhbXFp5JMu8Ak5_B_sc",
    authDomain: "ecolife-social.firebaseapp.com",
    databaseURL: "https://ecolife-social.firebaseio.com",
    projectId: "ecolife-social",
    storageBucket: "ecolife-social.appspot.com",
    messagingSenderId: "336467959957",
    appId: "1:336467959957:web:5be4f53e2eb0bf31607b9c",
    measurementId: "G-0H1JPYCREX"
    };
    firebase.initializeApp(firebaseConfig);
    router(window.location.hash)
    const googleSignIn = document.getElementById("googleSignIn");
    const githubSignIn = document.getElementById("githubSignIn");

    // login with Google
    // const provider = new firebase.auth.GoogleAuthProvider();
    googleSignIn.addEventListener("click", (e) => {
        e.preventDefault();
        console.log("clickeado")
        // router('#/blog')
    const baseProvider = new firebase.auth.GoogleAuthProvider();
    firebase
        .auth().signInWithPopup(baseProvider).then(function(result) {
            console.log(result);
            console.log("Success Google linked");
            window.location.hash = '#/blog'
            // router('#/blog')
        }).catch(function(error) {
            console.log(error);
        });
    });

    //login with GitHub
    githubSignIn.addEventListener("click", (e) => {
        e.preventDefault();
        console.log("clickeado")
    const providerGit = new firebase.auth.GithubAuthProvider();
    firebase
         .auth().signInWithPopup(providerGit).then(function(result) {
            console.log(result);
            console.log("Success GitHub linked");
            window.location.hash = '#/blog'
            //router('#/blog')
        }).catch(function(error) {
            console.log(error);
        });
         //firebase.auth().signInWithRedirect(providerGit);
    });
       window.addEventListener('hashchange', () => {
       router(window.location.hash);
    });
  };
  
  window.addEventListener('load', init);







