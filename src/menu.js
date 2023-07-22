import icedAmericanoImg from './assets/iced-americano.png';
import icedCappuccinoImg from './assets/iced-cappuccino.png';
import icedLatteImg from './assets/iced-latte.png';
import icedMochaImg from './assets/iced-mocha.png';
import icedCaramelMacchiatoImg from './assets/iced-caramel-macchiato.png';
import icedMatchaLatteImg from './assets/iced-matcha-latte.png';

export default function loadMenuPage() {
  const menuDiv = document.createElement('div');
  menuDiv.id = 'menu-page';

  const header = document.createElement('header');

  const emptyDiv = document.createElement('div');

  const headerLogo = document.createElement('div');
  headerLogo.textContent = 'Café Luna';

  const homeBtn = document.createElement('button');
  homeBtn.type = 'button';
  homeBtn.classList.add('tab-button');
  homeBtn.id = 'home';
  homeBtn.textContent = 'Home';

  const menuBtn = document.createElement('button');
  menuBtn.type = 'button';
  menuBtn.classList.add('tab-button');
  menuBtn.id = 'menu';
  menuBtn.textContent = 'Menu';

  const contactBtn = document.createElement('button');
  contactBtn.type = 'button';
  contactBtn.classList.add('tab-button');
  contactBtn.id = 'contact';
  contactBtn.textContent = 'Contact';

  header.append(emptyDiv, headerLogo, homeBtn, menuBtn, contactBtn)

  const menuItemsSection = document.createElement('section');
  menuItemsSection.id = 'menu-items';

  const coffeeDrinksCategory = document.createElement('div');
  coffeeDrinksCategory.classList.add('menu-category');
  coffeeDrinksCategory.textContent = 'Coffee Drinks';

  const coffeeItems = document.createElement('section');
  coffeeItems.id = 'coffee-items';

  const coffeeItemsList = [
    {name: 'Iced Americano', imgSrc: icedAmericanoImg},
    {name: 'Iced Cappuccino', imgSrc: icedCappuccinoImg},
    {name: 'Iced Latte', imgSrc: icedLatteImg},
    {name: 'Iced Mocha', imgSrc: icedMochaImg},
    {name: 'Iced Caramel Macchiato', imgSrc: icedCaramelMacchiatoImg},
    {name: 'Iced Matcha Latte', imgSrc: icedMatchaLatteImg}
  ];

  for (let i = 0; i < 6; i++) {
    const coffeeItem = document.createElement('div');
    coffeeItem.classList.add('coffee-item');

    const coffeeItemName = document.createElement('div');
    coffeeItemName.textContent = coffeeItemsList[i].name;

    const coffeeItemImg = document.createElement('img');
    coffeeItemImg.src = coffeeItemsList[i].imgSrc;
    coffeeItemImg.alt = coffeeItemsList[i].name;

    coffeeItem.append(coffeeItemName, coffeeItemImg);
    coffeeItems.append(coffeeItem);
  }

  menuItemsSection.append(coffeeDrinksCategory, coffeeItems);

  menuDiv.append(header, menuItemsSection);

  const pageContent = document.querySelector('#content');
  pageContent.append(menuDiv);
}