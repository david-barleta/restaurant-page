import loadHomePage from './home.js';
import loadMenuPage from './menu.js';

// function clearCurrentPage() {
//   const content = document.querySelector('#content');
//   content.innerHTML = '';
// }

// function bindHeaderBtns() {
//   const homeBtn = document.querySelector('#home-button');
//   const menuBtn = document.querySelector('#menu-button');
//   const contactBtn = document.querySelector('#contact-button');

//   homeBtn.addEventListener('click', clearCurrentPage);
//   homeBtn.addEventListener('click', loadHomePage);


//   menuBtn.addEventListener('click', clearCurrentPage);
//   menuBtn.addEventListener('click', loadMenuPage);
// }

// loadHomePage();
// bindHeaderBtns();

function clearCurrentPage() {
  const pageContent = document.querySelector('#content');
  pageContent.innerHTML = '';
}

function loadNewPage(page) {

  switch (page) {
    case 'home':
      loadHomePage();
      break;
    case 'menu':
      loadMenuPage();
      break;
  }

  bindTabButtonClicks();
}

function handleTabClick(event) {
  const selectedPage = event.target.id;

  clearCurrentPage();
  loadNewPage(selectedPage);
}

function bindTabButtonClicks() {
  const tabBtns = document.querySelectorAll('.tab-button');
  tabBtns.forEach((button) => {
    button.addEventListener('click', handleTabClick);
  });
}

loadNewPage('home');