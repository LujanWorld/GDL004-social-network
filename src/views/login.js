
export default (container) => {
    const viewLogin = `
    <div id="login">
        <div class="general-container">
            <div class="info-container">
            
                <div class="container-white">

                    <div class="container-blue">
                        <input id="txtEmail" type="email" class="login-input" placeholder="Email"/> 
                        <br>
                        <br>
                        <input id="txtPassword" type="password" class="login-input"  placeholder="Password"/> 
                        <br>
                        <br>
                        <button id="btnLogin" class="button-login">Iniciar sesión</button>
                        <br>
                        <br>
                        <button id="googleSignIn" class="button-google"><img src="images/search.png" width="70" height="70"/></button>
                        <button id="githubSignIn" class="button-github" ><img src="images/github-image.png" width="70" height="70" /></button>
                    </div>
                    <div class="register">
                        <h2 class="register">¿Aún no tienes una cuenta?</h2>
                        <br>
                        <button id="btnSignUp" class="button-login">Regístrate gratis</button>  
                    </div>
                </div>
            </div>
        <div class="logo-container">
            <div class="container">
                <img src="images/LogoAzul.png" width="270px" height="" alt="logo" id="imagen"/>
                </div>
            </div>   
        </div>  
    </div>
</div>`
    
    const sectionElem = document.createElement('section');
    sectionElem.innerHTML += viewLogin 
    container.appendChild(sectionElem) 

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
  logOAuth(baseProvider)
});

// login with GitHub
githubSignIn.addEventListener("click", (e) => {
  e.preventDefault();
  console.log("clickeado")
  const providerGit = new firebase.auth.GithubAuthProvider();
  logOAuth(providerGit)
});

// // add register event
btnSignUp.addEventListener("click", e => {
  e.preventDefault()
  window.location.hash = '#/signup'
});

}

const logOAuth = (provider) => {
    firebase
        .auth()
        .signInWithPopup(provider)
        .then((result) => {
        console.log(result);
        console.log("Success Google linked");
        window.location.hash = '#/welcome'
        })
        .catch((err) => console.log(err));
}