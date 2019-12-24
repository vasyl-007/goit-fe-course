import './styles.css';
import menu from './menu.json';
import menuItem from './menu.hbs';

const menuUl = document.querySelector('.js-menu');

function createMenuList(menu) {
  const items = menu.map(menu => menuItem(menu)).join('');
  menuUl.insertAdjacentHTML('beforeend', items);
}

createMenuList(menu);

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const input = document.getElementById('theme-switch-control');
const bodyTheme = document.body;
const currentTheme = localStorage.getItem('Theme');

const checkBox = document.querySelector('input[type="checkbox"]');
input.addEventListener('click', clickEvent);

if (currentTheme == 'DARK') {
  bodyTheme.classList.add('dark-theme');
  checkBox.checked = true;
} else {
  bodyTheme.classList.add('light-theme');
  checkBox.checked = false;
}

function clickEvent(e) {
  if (bodyTheme.classList.contains('light-theme')) {
    bodyTheme.classList.remove('light-theme');
    bodyTheme.classList.add('dark-theme');
    localStorage.setItem('Theme', 'DARK');
  } else {
    bodyTheme.classList.remove('dark-theme');
    bodyTheme.classList.add('light-theme');
    localStorage.setItem('Theme', 'LIGHT');
  }
}

localStorage.getItem('Theme');
