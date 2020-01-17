
export default () => {
    const viewLogin = `
    <div id="login" class="hide">
      <main class="center">
        <div class="container">
          <h1>ECO LIFE</h1>
          <img src="images/LogoAzul.png" width="270" height="230" alt="logo"/>
          <br />
          
          <input id="txtEmail" type="email" placeholder="Email"/>

          <input id="txtPassword" type="password" placeholder="Password"/>
          <br />
          <br>
          <button id="btnLogin" class="btn btn-action">Log in</button>

          <br>
          <br>
          <button id="googleSignIn" class="button-google"><img src="images/search.png" width="70" height="70"/></button>
          <button id="githubSignIn" class="button-github" ><img src="images/github-image.png" width="70" height="70" /></button>


          <h2>¿Aún no tienes una cuenta?</h2>
          <button id="btnSignUp">Regístrate gratis</button>
        </div>
      </main>
    </div>`

    const sectionElem = document.createElement('section');
    sectionElem.innerHTML += viewLogin 
    return sectionElem 

}