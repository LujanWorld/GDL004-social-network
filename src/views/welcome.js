export default (container, state) => {
  if (Object.keys(state).length === 0) {
    console.log("estoy vacio");
    return (window.location.hash = "#/");
  }
  let db = firebase.firestore();
  const viewWelcome = `
    <div class="general-blog">
      <div class="white-white">
          <div class="info-blog">
            <li><a href="#"><button class="button-google" ><img src="images/logo.png" width="100px"></button></a></li>
            <br>
            <li><a href="#/profile"><button class="button-google" id="profile"></a><img src="images/profile.png" width="50px"></li>
            <br>
            <br>
            <li><a href="https://www.greenpeace.org/mexico/blog/1405/40-tips-para-cuidar-el-planeta/"><button class="button-google"><img src="images/eco.png" width="50px"></button></a></li>
            <br>
            <br>
            <li><a href="#"><button id="btnLogout" class="button-login">Cerrar Sesión</button></a></li>
          </div>
          <div class="container-post">
              <div class="logo-blog">
                  <img src="images/name.png" width="250px" alt="">
                  <br>
              </div>
              <div class="writing-box">
                <br>
                <h2 id="createPost">¿Qué haces para cuidar a tu planeta?</h2>
                <br>
                <input type="text" id="makePost" class="login-input" placeholder="Cuéntanos"/>
                <button id="savePost" class="btnCancel" >Guardar</button>
              </div>
              <div id="posts" class="display-box">
                <div class="post">
                <p class="name">Nombre del que escribe el post</p>
                <div class="date">fecha del post</div>
                <p class="text">Esta red social esta super</p>
              </div>

          </div>
  
      </div>
    </div>
      `;

  console.log("el  estado:", state);

  const sectionElem = document.createElement("section");
  sectionElem.innerHTML += viewWelcome;
  container.appendChild(sectionElem);

  const btnLogout = document.getElementById("btnLogout");
  const makePost = document.getElementById("makePost");
  const savePost = document.getElementById("savePost");
  const docRef = document.getElementById("samples/post");
  const posts = document.getElementById("posts");

  showPostsFromDB();

  btnLogout.addEventListener("click", (e) => {
    e.preventDefault();
    firebase
      .auth()
      .signOut()
      .then(() => {
        state = {};
        window.location.hash = "#/";
      })
      .catch();
  });
  profile.addEventListener("click", (e) => {
    e.preventDefault();
    window.location.hash = "#/profile";
  });

  posts.addEventListener("click", (e) => {
    if (e.target.classList.contains("btnDelete")) {
      console.log("DELETE clicked");
      let postId = e.target.parentElement.getAttribute("post-id");
      db.collection("posts")
        .doc(postId)
        .delete()
        .then(() => {
          console.log(`Deleted post with id ${postId}`);
          showPostsFromDB();
        })
        .catch((err) =>
          console.log(`Error while deleting post with id ${postId}`, err)
        );
    }

    if (e.target.classList.contains("btnEdit")) {
      let doc = document.getElementsByClassName(e.target.id)[0];
      doc.classList.remove("occult");
      let textEl = e.target.parentElement.getElementsByClassName("text")[0];
      let inputEl = e.target.parentElement.getElementsByClassName(
        "editInput"
      )[0];
      inputEl.value = textEl.innerHTML;

      ["editInput", "btnSave", "btnCancel", "btnEdit", "btnDelete"].forEach(
        (className) => {
          let el = e.target.parentElement.getElementsByClassName(className)[0];
          el.classList.toggle("hide");
        }
      );
    }

    if (e.target.classList.contains("btnSave")) {
      let postId = e.target.parentElement.getAttribute("post-id");
      console.log(postId);
      let inputEl = e.target.parentElement.getElementsByClassName(
        "editInput"
      )[0];

      let postRef = db.collection("posts").doc(postId);

      postRef
        .update({
          text: inputEl.value,
        })
        .then(function () {
          console.log("Document successfully updated!");
          showPostsFromDB();
        })
        .catch(function (error) {
          console.error("Error updating document: ", error);
        });
    }
    if (e.target.classList.contains("btnCancel")) {
      ["editInput", "btnSave", "btnCancel", "btnEdit", "btnDelete"].forEach(
        (className) => {
          let el = e.target.parentElement.getElementsByClassName(className)[0];
          el.classList.toggle("occult");
        }
      );
    }
  });

  savePost.addEventListener("click", function () {
    const textToSave = makePost.value;
    let data = {
      email: state.user.email,
      date: new Date(),
      text: textToSave,
    };
    console.log(data);
    db.collection("posts")
      .add(data)
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
    data.forEach((p) => {
      const post = document.createElement("div");
      post.classList.add("post");
      post.setAttribute("post-id", p.id);
      let botonEdit = "btnEdit-" + p.id;
      post.innerHTML = `
        <div class="name">${p.email}</div>
        <div class="date">${p.date}</div>
        <p class="text">${p.text}</p>
        <button id="${botonEdit}" class="btnEdit" >Editar</button>
        <button id="button" onClick="like()">LIKE</button>
        <p type="text" style="color:blue;"id="show"></p>
        
        <button class="btnDelete">Eliminar</button>
        <button class="button-google"><img src="images/like.png" width="20px"></button>
        <br>
        <br>
        <div class="occult ${botonEdit}" post-id="${p.id}" >
          <input type="text"  class="editInput hide">
          <button class="btnSave hide">Guardar</button>
          <button class="btnCancel hide">Cancelar</button>
        </div>
        `;

      posts.appendChild(post);
    });
  }
  var likes = 0;
  function like() {
    document.getElementById("show").innerHTML = likes;
    likes = likes + 1;
    localStorage.setItem("likes", likes);
  }

  function showPostsFromDB() {
    db.collection("posts")
      .get()
      .then((querySnapshot) => {
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
};
