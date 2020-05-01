import { router } from './utils/router.js';

const state = {};

const init = () => {
  const firebaseConfig = {
    apiKey: 'AIzaSyDEAtw5wa3Auz7MzsBI1eS0oX-md1RE9yA',
    authDomain: 'social-network-eedc8.firebaseapp.com',
    databaseURL: 'https://social-network-eedc8.firebaseio.com',
    projectId: 'social-network-eedc8',
    storageBucket: 'social-network-eedc8.appspot.com',
    messagingSenderId: '378714099666',
    appId: '1:378714099666:web:56769efd615e9c6926820b',
    measurementId: 'G-CJK45C4SQ1',
  };
  firebase.initializeApp(firebaseConfig);
  router(window.location.hash, state);
};

window.addEventListener('hashchange', () => {
  router(window.location.hash, state);
});

window.addEventListener('load', init);
