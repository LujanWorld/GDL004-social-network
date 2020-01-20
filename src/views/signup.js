export default (container) => {
    const viewSignup = `
    <div class="display-flex">
    <h1>ECO LIFE</h1> 
    <img src="images/LogoAzul.png" width="270" height="230" alt="">
    </div>
    <form class="display-flex form-login">
    <input type="text" id="input-name" class="login-input" placeholder="Nombre">
    <div>
    <br>
    <br>
    <input type="email" id="input-mail" class="login-input" placeholder="ejemplo@ejemplo.com">
      <span id="icon-mail" class="icon-input"></span>
      </div>
      <br>
      <br>
      <div class="cont-password">
      <input type="password" id="input-password" class="login-input class-input" placeholder="Escribe tu contraseña" >
      <span id="icon-clave" class="icon-input icon-clave"></span>
      <span id="icon-password" class="icon-input"></span>
      </div>
      <br>
      <br>
      <p class="ms-info-alert" id="ms-info-alert"></p>
      <button class="btn-btn-action" id="btn-iniciar-registrar" data-action='registrar'>Registrar</button>      
      <p id="ms-iniciar-registrar" class="text-peq">¿Ya tienes una cuenta?<a href= "#/" class="btn-btn-action"" id="btn-change-iniciar-registrar">Iniciar Sesión</a></p>
      </fomr>
      `
    
    const sectionElem = document.createElement('section');
    sectionElem.innerHTML += viewSignup 
    container.appendChild(sectionElem)    

}