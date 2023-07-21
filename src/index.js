import loadHomePage from "./home.js";

function clearCurrentPage() {
  const content = document.querySelector('#content');
  content.innerHTML = '';
  console.log('I was clicked')
}

function bindHeaderBtns() {
  const homeBtn = document.querySelector('#home-button');
  const menuBtn = document.querySelector('#menu-button');
  const contactBtn = document.querySelector('#contact-button');

  homeBtn.addEventListener('click', clearCurrentPage);
  homeBtn.addEventListener('click', loadHomePage);
}

loadHomePage();