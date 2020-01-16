

export default () => {
    const viewSignup = `
    <div class="name-banner"><h1>EcoLife</h1>
    <img src="images/LogoAzul.png" width="270" height="230" alt="">
    </div> 
    <p class="text-welcom">Bienvenidos</p>
    <form class="display-flex form-login"> 
    <div class=conteiner-email>
    <input type="email" id="email-field" class="login-input" placeholder="ejemplo@ejemplo.com">
    <span id="icon-mail" class="icon-input"></span>
    </div>
    <div class="conteiner-password">
    <input type="password" id="password-field" class="login-input class-input" placeholder="Escribe tu contraseña">
    <span id="icon-pass" class="icon-input icon-pass"></span>
    <span id="icon-password" class="icon-input"></span>
    </div>
    <button type="button" id="email-singup" >Click Me!</button>
    <div class="conteiner-networks-display-flex">
    <p class="text-networks">Registrarse con:</p>
    <button class="btn-icon-google" id="googleSignIn">Google</button>
    <button class="btn-icon-github" id="githubSignIn">GitHub</button> 
    </div>
    <p id="start-registry" class="text-start-registry">¿Aún no tienes una cuenta?</p> 
    <button>Regístrate gratis</button>
    </form>
    `

    const sectionElem = document.createElement('section');
    sectionElem.innerHTML += viewSignup 
    return sectionElem   

}
    

      
     
      
      