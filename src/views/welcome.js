export default (container) => {
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
                <img src="images/name.png" width="400px" alt="">
            </div>
            <div class="writing-box">

            </div>
            <div class="display-box">

            </div>

        </div>   
    </div>
      `

    const sectionElem = document.createElement('section');
    sectionElem.innerHTML += viewWelcome 
    container.appendChild(sectionElem)

    const btnLogout = document.getElementById("btnLogout");

    btnLogout.addEventListener("click", e => {
        e.preventDefault()
      firebase.auth().signOut().then(() => {
        window.location.hash = '#/'
      }).catch()
    });

}