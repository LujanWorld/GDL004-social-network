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
    default:
      break;
  }
};
export { router };