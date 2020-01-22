/* eslint-disable semi */
// Initialize Firebase
// Your web app's Firebase configuration
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
var db = firebase.firestore();

// App state.
const state = {
  "user": null
};


const pages = {
  "main": document.getElementById("main"),
  "login": document.getElementById("login")
};


//
// Login Page
//

// Get elements
const txtEmail = document.getElementById("txtEmail");
const txtPassword = document.getElementById("txtPassword");
const btnLogin = document.getElementById("btnLogin");
const btnSignUp = document.getElementById("btnSignUp");
const googleSignIn = document.getElementById("googleSignIn");
const githubSignIn = document.getElementById("githubSignIn");
const createPost = document.getElementById("createPost");
const makePost = document.getElementById("makePost");
const savePost = document.getElementById("savePost");
const docRef = document.getElementById("samples/post");




// add login event
btnLogin.addEventListener("click", e => {
  // get email and pass
  const email = txtEmail.value;
  const pass = txtPassword.value;
  const auth = firebase.auth();

  // sing in
  const promise = auth.signInWithEmailAndPassword(email, pass);
  promise.catch(e => console.log(e.message));

});

// login with Google
googleSignIn.addEventListener("click", () => {
  const baseProvider = new firebase.auth.GoogleAuthProvider();
  firebase
    .auth()
    .signInWithPopup(baseProvider)
    .then((result) => {
      console.log(result);
      console.log("Success Google linked");
    })
    .catch((err) => console.log(err));
});

// login with GitHub
githubSignIn.addEventListener("click", (e) => {
  e.preventDefault();
  console.log("clickeado")
  const providerGit = new firebase.auth.GithubAuthProvider();
  firebase.auth().signInWithPopup(providerGit).then(function (result) {
    console.log(result);
    console.log("Success GitHub linked");
  }).catch(function (error) {
    console.log(error);
  });
});

// add register event
btnSignUp.addEventListener("click", e => {
  // get email and pass
  console.log("click boton registro");
  const email = txtEmail.value;
  const pass = txtPassword.value;
  const auth = firebase.auth();

  // sing in
  const promise = auth.createUserWithEmailAndPassword(email, pass);
  promise.catch(e => console.log(e.message));
});


//
// Main page
//

const posts = document.getElementById('posts');
const btnLogout = document.getElementById("btnLogout");

btnLogout.addEventListener("click", e => {
  firebase.auth().signOut().catch()
});

posts.addEventListener("click", e => {
  console.log(e.target);
  if (e.target.classList.contains("btnDelete")) {
      console.log("DELETE clicked");
      let postId = e.target.parentElement.getAttribute("post-id");
      db.collection("posts").doc(postId).delete()
        .then(() => {
          console.log(`Deleted post with id ${postId}`);
          showPostsFromDB();
        })
        .catch(err => console.log(`Error while deleting post with id ${postId}`, err));
  }

  if (e.target.classList.contains("btnEdit")) {
    console.log("EDIT clicked");
  }
});


// save post button
savePost.addEventListener("click", function () {
  const textToSave = makePost.value;
  let data = {
    email: state.user.email,
    date: new Date(),
    text: textToSave,
  };
  console.log(data);
  db.collection("posts").add(data)
    .then(function (docRef) {
      showPostsFromDB();
      console.log("Document written with ID: ", docRef.id);
    })
    .catch(function (error) {
      console.error("Error adding document: ", error);
    });
});

// show posts
function showPosts(data) {
  posts.innerHTML = "";
  data.forEach(p => {
    const post = document.createElement('div');
    post.classList.add('post');
    post.setAttribute("post-id", p.id);
    post.innerHTML = `
    <div class="name">${p.email}</div>
    <div class="date">${p.date}</div>
    <p class="text">${p.text}</p>
    <button class="btnEdit">Edit</button>
    <button class="btnDelete">Delete</button>
    `;

    posts.appendChild(post);
  });
}

function showPostsFromDB() {
  db.collection("posts").get().then((querySnapshot) => {
    let posts = [];
    querySnapshot.forEach(function (doc) {
      let data = doc.data();
      data.id = doc.id;
      data.date = data.date.toDate();
      posts.push(data);
    });
    showPosts(posts);
  });
}

//
// Main logic
//

const togglePage = (name) => {
  Object.keys(pages).forEach((key) => pages[key].classList.toggle("hide", key !== name));
}

const showLoginPage = () => {
  togglePage("login");
}

const showMainPage = () => {
  togglePage("main");
  showPostsFromDB();
}

firebase.auth().onAuthStateChanged(user => {
  state.user = user;
  if (user) {
    // Show main page.
    console.log("User logged in", user);
    showMainPage();
  } else {
    // Show login page.
    console.log("User not logged in");
    showLoginPage();
  }
});
