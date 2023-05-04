import '../scss/styles.scss';
import * as bootstrap from 'bootstrap';

const body = document.querySelector('body');
const toggle1 = document.getElementById('toggle-1');
const toggle2 = document.getElementById('toggle-2');
const toggle3 = document.getElementById('toggle-3');
const display = document.getElementById('display');
const key = document.querySelectorAll('.col');
const delBtn = document.querySelector('.btn-del');
const resetBtn = document.querySelector('.btn-reset');

// THEMES
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

// MATH
key.forEach((e) => {
  e.addEventListener('click', () => {
    const digit = e.querySelector('span').textContent;
    const maxLength = window.innerWidth >= 992 ? 15 : 12;

    if (display.innerHTML.length < maxLength) {
      switch (digit) {
        case '=':
          display.innerHTML = eval(display.innerHTML.replace(/x/g, '*'));
          break;
        case '+':
        case '-':
        case 'x':
        case '/':
          const lastChar = display.innerHTML.slice(-1);
          if (
            lastChar !== '+' &&
            lastChar !== '-' &&
            lastChar !== 'x' &&
            lastChar !== '/'
          ) {
            display.innerHTML += digit;
          }
          break;
        case '.':
          const lastValue = display.innerHTML.split(/[\+\-\*\/]/).pop();
          console.log(lastValue);
          if (!lastValue.includes('.') && lastValue.length < maxLength) {
            display.innerHTML += digit;
          }
          break;
        default:
          if (!isNaN(digit)) {
            if (display.innerHTML === '0') {
              display.innerHTML = digit;
            } else {
              display.innerHTML += digit;
            }
          }
      }
    }
  });
});

delBtn.addEventListener('click', () => {
  const displayValue = display.textContent;

  if (displayValue.length > 1) {
    display.textContent = displayValue.slice(0, -1); // Remove the last character from display
  } else {
    display.textContent = '0';
  }
});

resetBtn.addEventListener('click', () => {
  display.innerHTML = '0';
});
