export default (container, state) => {
    if (Object.keys(state).length === 0) {
        console.log("estoy vacio")
        return window.location.hash = '#/'
      }
    let db = firebase.firestore();
      const viewWelcome = `
      <div class="container-image">
        <div class="white-profile">
          <div class="container-profile">
          <img id="avatar" class="img" src="images/usuario.png" alt="Avatar">
          <br>
          <input type="text" id="name-input" class="login-input" placeholder="Nombre"/>
          <br>
          
          <br>
          <br>
          <button id="change-data" class="button-login">Editar</button>
          <br>
          <br>
          <br>
          <a href="#/welcome"><button class="button-login">Volver</button></a>
          <br>
          <br>
          </div>
        </div>
      </div>
      `
      const sectionElem = document.createElement('section');
      sectionElem.innerHTML += viewWelcome 
      container.appendChild(sectionElem) 
      const changeButton = document.getElementById("change-data")

      const nameInput = document.getElementById("name-input")
      nameInput.value = state.user.displayName
      
      const avatar = document.getElementById("avatar")
      avatar.src = state.user.providerData[0].photoURL
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
