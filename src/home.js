export default function loadHomePage() {
  const homeDiv = document.createElement('div');
  homeDiv.id = 'home-page';

  const heroSection = document.createElement('div');
  heroSection.id = 'hero-section';

  const header = document.createElement('header');

  const emptyDiv = document.createElement('div');

  const headerLogo = document.createElement('div');
  headerLogo.textContent = 'Café Luna';

  const homeBtn = document.createElement('button');
  homeBtn.type = 'button';
  homeBtn.classList.add('tab-button');
  homeBtn.setAttribute('data-page', 'home');
  homeBtn.textContent = 'Home';

  const menuBtn = document.createElement('button');
  menuBtn.type = 'button';
  menuBtn.classList.add('tab-button');
  menuBtn.setAttribute('data-page', 'menu');
  menuBtn.textContent = 'Menu';

  const contactBtn = document.createElement('button');
  contactBtn.type = 'button';
  contactBtn.classList.add('tab-button');
  contactBtn.setAttribute('data-page', 'contact');
  contactBtn.textContent = 'Contact';

  header.append(emptyDiv, headerLogo, homeBtn, menuBtn, contactBtn)

  const heroContent = document.createElement('div');
  heroContent.id = 'hero-content';

  const heroContentLogo = document.createElement('div');
  heroContentLogo.textContent = 'Café Luna';

  const heroContentIntro = document.createElement('p');
  heroContentIntro.textContent = 'Welcome to Café Luna, a place where you can unwind and enjoy delicious flavors. Located in the heart of Cavite, our peaceful cafe offers a break from the busyness of daily life. Whether you\'re seeking solitude or spending time with friends, our cozy interior sets the perfect atmosphere. With soft lighting, comfortable seating, and soothing music, you can unwind, reflect, and connect with others.';

  heroContent.append(heroContentLogo, heroContentIntro);

  heroSection.append(header, heroContent);

  const menuSection = document.createElement('div');
  menuSection.id = 'menu-section';

  const menuDescription = document.createElement('p');
  menuDescription.textContent = 'At Café Luna, we take pride in offering a range of menu options that strike a balance between quality and affordability. We\'ve carefully created a menu that caters to your desire for both relaxation and culinary pleasure. Indulge in the enticing aroma of freshly brewed coffee drinks, expertly prepared by our skilled baristas. Treat yourself to our delightful selection of pastries and cakes, each baked to perfection, tempting you wth their delightful textures and flavors.';

  menuSection.append(menuDescription);

  const ctaSection = document.createElement('div');
  ctaSection.id = 'cta-section';

  const cta = document.createElement('p');
  cta.textContent = 'Experience the perfect blend of flavors, relaxation, and connection at Café Luna.';

  const ctaBtn = document.createElement('button');
  ctaBtn.type = 'button';
  ctaBtn.classList.add('tab-button');
  ctaBtn.setAttribute('data-page', 'menu');
  ctaBtn.textContent = 'View our menu.'

  ctaSection.append(cta, ctaBtn);

  homeDiv.append(heroSection, menuSection, ctaSection);

  const pageContent = document.querySelector('#content');
  pageContent.append(homeDiv);
}