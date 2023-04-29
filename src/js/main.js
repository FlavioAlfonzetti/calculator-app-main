import '../scss/styles.scss';
import * as bootstrap from 'bootstrap';

const body = document.querySelector('body');
const toggle1 = document.getElementById('toggle-1');
const toggle2 = document.getElementById('toggle-2');
const toggle3 = document.getElementById('toggle-3');

toggle1.addEventListener('click', () => {
  body.classList.remove('light-theme');
  body.classList.remove('neon-theme');
});
toggle2.addEventListener('click', () => {
  body.classList.remove('neon-theme');
  body.classList.add('light-theme');
});
toggle3.addEventListener('click', () => {
  body.classList.add('neon-theme');
});
