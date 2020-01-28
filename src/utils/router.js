  
import { components } from '../views/components.js';

const router = (router) => {
  const container = document.getElementById('main-conteiner');
  container.innerHTML = '';
  switch (router) {
    case '': {
        return components.login(container) }
    case '#/': {
        return components.login(container); }
    case '#/blog': {
      return components.blog(container); }
    case '#/welcome': {
        return components.welcome(container); }
    case '#/signup': {
        return components.signup(container); }
    case '#/profile': {
          return components.profile(container); }
    default:
      break;
  }
};
export { router };