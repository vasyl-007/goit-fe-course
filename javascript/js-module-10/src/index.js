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

if (currentTheme == Theme.DARK) {
  bodyTheme.classList.add(Theme.DARK);
  checkBox.checked = true;
} else {
  bodyTheme.classList.add(Theme.LIGHT);
  checkBox.checked = false;
}

function clickEvent(e) {
  if (bodyTheme.classList.contains(Theme.LIGHT)) {
    bodyTheme.classList.remove(Theme.LIGHT);
    bodyTheme.classList.add(Theme.DARK);
    localStorage.setItem('Theme', Theme.DARK);
  } else {
    bodyTheme.classList.remove(Theme.DARK);
    bodyTheme.classList.add(Theme.LIGHT);
    localStorage.setItem('Theme', Theme.LIGHT);
  }
}


