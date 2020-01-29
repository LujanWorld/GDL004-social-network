  
import { components } from '../views/components.js';

const router = (router, state) => {
  const container = document.getElementById('main-conteiner');
  container.innerHTML = '';
  switch (router) {
    case '': {
        return components.login(container, state) }
    case '#/': {
        return components.login(container, state); }
    case '#/blog': {
      return components.blog(container, state); }
    case '#/welcome': {
        return components.welcome(container, state); }
    case '#/signup': {
        return components.signup(container, state); }
    case '#/profile': {
          return components.profile(container, state); }
    default:
      break;
  }
};
export { router };