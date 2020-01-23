export default (container) => {
  var db = firebase.firestore();
    const viewWelcome = `
    <div class="general-blog">
        <div class="info-blog">
            <button class="icon-logo"><img src="images/logo.png" width="100px"></button>
            <br>
            <br>
            <button class="button-google"><img src="images/profile.png" width="50px"></button>
            <br>
            <br>
            <br>
            <button class="button-google"><img src="images/galery.png" width="50px"></button>
            <br>
            <br>
            <button class="button-google"><img src="images/loupe.png" width="50px"></button>
            <br>
            <br>
            <br>
            <button class="button-google"><img src="images/eco.png" width="50px"></button>
            <br>
            <br>
            <br>
            <button id="btnLogout" class="button-login">Salir</button>
        </div>
        <div class="container-post">
            <div class="logo-blog">
                <img src="images/name.png" width="250px" alt="">
                <br>
            </div>
            <div class="writing-box">
             <br>
             <h2 id="createPost">Crea tu post</h2>
             <input type="text" id="makePost" class="login-input" placeholder="Post"/>
             <button id="savePost" class="button-login" >Save</button>
            </div>
             <div id="posts" class="display-box">
               <div class="post">
               <div class="name">Nombre del que escribe el post</div>
               <div class="date">fecha del post</div>
               <p class="text">Esta red social esta super</p>
             </div>

            </div>

        </div>   
    </div>
      `

      const sectionElem = document.createElement('section');
      sectionElem.innerHTML += viewWelcome 
      container.appendChild(sectionElem)
  
      const btnLogout = document.getElementById("btnLogout");
      const makePost = document.getElementById("makePost");
      const savePost = document.getElementById("savePost");
      const docRef = document.getElementById("samples/post");
      const posts = document.getElementById('posts');

      showPostsFromDB()

      btnLogout.addEventListener("click", e => {
          e.preventDefault()
        firebase.auth().signOut().then(() => {
          window.location.hash = '#/'
        }).catch()
      });

      savePost.addEventListener("click", function () {
        const textToSave = makePost.value;
        let data = {
          email: "",
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
  
  }




      
      




      


