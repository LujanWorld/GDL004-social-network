export default (container) => {
    let db = firebase.firestore();
      const viewWelcome = `
      <div class="container-profile">
      <a href="" >
      <img class="img" src="https://lh3.googleusercontent.com/-mvfqXkzMEZc/AAAAAAAAAAI/AAAAAAAAAAA/ACHi3rf4AE3SforMuyW6X8FdxcFOVvnEYA.CMID/s64-c/photo.jpg" alt="">
      </a>
      <br>
      <input type="text" id="name-input" class="login-input" placeholder="Nombre"/>
      <br>
      <input type="text" id="email-input" class="login-input" placeholder="Correo electrónico"/>
      <br>
      <input type="password" id="" class="login-input class-input" placeholder="Escribe tu contraseña" >
      <br>
      <br>
      <button id="change-data" class="button-login">Editar</button>
      `
      const sectionElem = document.createElement('section');
      sectionElem.innerHTML += viewWelcome 
      container.appendChild(sectionElem) 
      const changeButton = document.getElementById("change-data")
      const nameInput = document.getElementById("name-input")
      changeButton.addEventListener("click", e => {
          e.preventDefault()
          firebase.auth().onAuthStateChanged(function(user) {
            if (user) {
              // User is signed in.
              console.log("si hay usuario", user)
              user.updateProfile({
                displayName: nameInput.value
              }).then(function() {
                console.log("cambiado")
              }, function(error) {
              });
            } else {
              console.log("no hay usuario")
            }
          });
      })
        
      

     }
