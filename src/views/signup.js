export default (container) => {
    const viewSignup = `
    <div class="container-image">
      <div class="container-register-white">
         <div class="container-register">
            <img src="images/LogoAzul.png" width="310" height="" alt="">
            <br>
            <br>
            <input type="text" id="input-name" class="login-input" placeholder="Nombre">
            <br>
            <br>
            <input type="email" id="input-mail" class="login-input" placeholder="ejemplo@ejemplo.com">
            <span id="icon-mail" class="icon-input"></span>
            <br>
            <br>
            <input type="password" id="input-password" class="login-input class-input" placeholder="Escribe tu contraseña" >
            <span id="icon-clave" class="icon-input icon-clave"></span>
            <span id="icon-password" class="icon-input"></span>
            <br>
            <br>
            <p class="ms-info-alert" id="ms-info-alert"></p> 
            <button class="button-login" id="btn-iniciar-registrar" data-action='registrar'>Registrar</button>  
            <br>
            <br>    
            <p id="ms-iniciar-registrar" class="text-peq">¿Ya tienes una cuenta? <a href= "#/" class="btn-btn-action"> Iniciar Sesión</a></p>
            <br>
         </div>
      </div> 
    </div>
          </fomr>
          `
    
    const sectionElem = document.createElement('section');
    sectionElem.innerHTML += viewSignup 
    container.appendChild(sectionElem)    

}