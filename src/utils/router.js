  
import { components } from '../views/components.js';

const router = (router) => {
  const container = document.getElementById('main-conteiner');
  container.innerHTML = '';
  switch (router) {
    case '': {
      return container.appendChild(components.login()); }
    case '#/': {
        return container.appendChild(components.login()); }
    case '#/blog': {
      return container.appendChild(components.blog()); }
    case '#/welcome': {
        return container.appendChild(components.welcome()); }
    case '#/signup': {
        return container.appendChild(components.signup()); }
    default:
      break;
  }
};
export { router };