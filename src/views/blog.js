export default (container, state) => {
    const viewSignup = `
    <p>Blog</p>
    `

    const sectionElem = document.createElement('section');
    sectionElem.innerHTML += viewSignup 
    container.appendChild(sectionElem)   

}