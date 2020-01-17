export default () => {
    const viewWelcome = `
    <div id="main" class="hide">
      <img src="images/LogoAzul.png" width="270" height="230" alt="logo" />
      <h1>Bienvenid@s a ECO LIFE</h1>
      <button id="btnLogout" class="btn btn-action">Log out</button>
    </div>
    `

    const sectionElem = document.createElement('section');
    sectionElem.innerHTML += viewWelcome 
    return sectionElem   

}