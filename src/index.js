import loadHomePage from './home.js';
import loadMenuPage from './menu.js';
import loadContactPage from './contact.js';

// function clearCurrentPage() {
//   const content = document.querySelector('#content');
//   content.innerHTML = '';
// }

// function bindHeaderBtns() {
//   const homeBtn = document.querySelector('#home');
//   const menuBtn = document.querySelector('#menu');
//   const contactBtn = document.querySelector('#contact');

//   homeBtn.addEventListener('click', handleHomeClick);
//   menuBtn.addEventListener('click', handleMenuClick);
// }

// function handleHomeClick() {
//   clearCurrentPage();
//   loadHomePage();
//   bindHeaderBtns();
// }

// function handleMenuClick() {
//   clearCurrentPage();
//   loadMenuPage();
//   bindHeaderBtns();
// }

// loadHomePage();
// bindHeaderBtns();

// Previous code above
// What I did wrong:
// - All the functions related to tabbed browsing are called inside the
// bind buttons function
// - Because of this, the bind buttons will have to be called inside itself
// - as well
// - There should be a separate function that handles the click wherein
// - all the necessary functions will be called inside here instead

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
    case 'contact':
      loadContactPage();
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