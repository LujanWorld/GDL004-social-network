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
    const faceSignIn = document.getElementById("facebookSignIn");

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
    // login with Facebook
    // const providerFace = new firebase.auth.FacebookAuthProvider();
    // faceSignIn.addEventListener("click", () => {
    // const baseProviderFace = new firebase.auth.FacebookAuthProvider();
    // firebase
    //     .auth()
    //     .signInWithPopup(baseProviderFace)
    //     .then(function(result) {
    //     console.log(result);
    //     console.log("Success Facebook linked");
    //     })
    //     .catch(function(error) {
    //     console.log(err);
    //     });
    // });
    window.addEventListener('hashchange', () => {
        router(window.location.hash);
      });
  };
  
  window.addEventListener('load', init);

// // const googleSignIn = document.getElementById("googleSignIn");
// // const faceSignIn = document.getElementById("facebookSignIn");

// // login with Google
// const provider = new firebase.auth.GoogleAuthProvider();
// googleSignIn.addEventListener("click", () => {
//   const baseProvider = new firebase.auth.GoogleAuthProvider();
//   firebase
//     .auth()
//     .signInWithPopup(baseProvider)
//     .then(function(result) {
//       console.log(result);
//       console.log("Success Google linked");
//     })
//     .catch(function(error) {
//       console.log(err);
//     });
// });
// // login with Facebook
// const providerFace = new firebase.auth.FacebookAuthProvider();
// faceSignIn.addEventListener("click", () => {
//   const baseProviderFace = new firebase.auth.FacebookAuthProvider();
//   firebase
//     .auth()
//     .signInWithPopup(baseProviderFace)
//     .then(function(result) {
//       console.log(result);
//       console.log("Success Facebook linked");
//     })
//     .catch(function(error) {
//       console.log(err);
//     });
// });





