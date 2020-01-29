export default (container, state) => {
    if (Object.keys(state).length === 0) {
        console.log("estoy vacio")
        return window.location.hash = '#/'
      }
    let db = firebase.firestore();
      const viewWelcome = `
      <div class="container-profile">
      <img id="avatar" class="img" src="images/usuario.png" alt="Avatar">
      <br>
      <input type="text" id="name-input" class="login-input" placeholder="Nombre"/>
      <br>
      <input type="text" id="number-input" class="login-input" placeholder="Número telefonico"/>
      <br>
      <br>
      <button id="change-data" class="button-login">Editar</button>
      <br>
      `
      const sectionElem = document.createElement('section');
      sectionElem.innerHTML += viewWelcome 
      container.appendChild(sectionElem) 
      const changeButton = document.getElementById("change-data")
      const nameInput = document.getElementById("name-input")
      nameInput.value = state.user.displayName
      const numberInput = document.getElementById("number-input")
      numberInput.value = state.user.phoneNumber
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
                //phoneNumber: numberInput.value
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
