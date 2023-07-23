import emailAddressIcon from './assets/email-address-icon.png';
import phoneNumberIcon from './assets/phone-number-icon.png';
import facebookIcon from './assets/facebook-icon.png';
import instagramIcon from './assets/instagram-icon.png';
import tiktokIcon from './assets/tiktok-icon.png';

export default function loadContactPage() {
  const contactDiv = document.createElement('div');
  contactDiv.id = 'contact-page';

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

  const contactContent = document.createElement('main');
  contactContent.id = 'contact-content';
  
  const contactInfoSection = document.createElement('section');
  contactInfoSection.id = 'contact-info';

  const contactInfoHeading = document.createElement('div');
  contactInfoHeading.textContent = 'Contact Information';

  contactInfoSection.append(contactInfoHeading);

  const contactInfoList = [
    { 
      contactIcon: emailAddressIcon,
      contactType: 'Email Address',
      contactInfo: 'cafelunaph@gmail.com'
    },
    {
      contactIcon: phoneNumberIcon,
      contactType: 'Phone Number',
      contactInfo: '0910-252-0021'
    }
  ];

  for (let i = 0; i < 2; i++) {
    const contactInfo = document.createElement('div');
    contactInfo.classList.add('contact');
    
    const contactIcon = document.createElement('img');
    contactIcon.src = contactInfoList[i].contactIcon;
    contactIcon.alt = contactInfoList[i].contactType;
    
    const contact = document.createElement('div');
    contact.textContent = contactInfoList[i].contactInfo;

    contactInfo.append(contactIcon, contact);
    contactInfoSection.append(contactInfo);
  }

  const socmedInfoSection = document.createElement('section');
  socmedInfoSection.id = 'socmed-info';

  const socmedInfoHeading = document.createElement('div');
  socmedInfoHeading.textContent = 'Follow us on social media!'

  socmedInfoSection.append(socmedInfoHeading);

  const socmedInfoList = [
    {
      socmedIcon: facebookIcon,
      socmedType: 'Facebook Account',
      socmedInfo: 'Café Luna PH'
    },
    {
      socmedIcon: instagramIcon,
      socmedType: 'Instagram Account',
      socmedInfo: '@cafelunaph'
    },
    {
      socmedIcon: tiktokIcon,
      socmedType: 'TikTok Account',
      socmedInfo: '@cafelunaph'
    }
  ];

  for (let i = 0; i < 3; i++) {
    const socmedAccount = document.createElement('div');
    socmedAccount.classList.add('socmed-account');

    const socmedIcon = document.createElement('img');
    socmedIcon.src = socmedInfoList[i].socmedIcon;
    socmedIcon.alt = socmedInfoList[i].socmedType;

    const socmed = document.createElement('div');
    socmed.textContent = socmedInfoList[i].socmedInfo;

    socmedAccount.append(socmedIcon, socmed);
    socmedInfoSection.append(socmedAccount);
  }

  const feedbackSection = document.createElement('section');
  feedbackSection.id = 'feedback-form';

  const feedbackSectionHeading = document.createElement('div');
  feedbackSectionHeading.textContent = 'Have a feedback? Share it with us.'

  const feedbackForm = document.createElement('form');

  const nameDiv = document.createElement('div');

  const nameLabel = document.createElement('label');
  nameLabel.for = 'name';
  nameLabel.textContent = 'Name';

  const nameInput = document.createElement('input');
  nameInput.type = 'text';
  nameInput.id = 'name';
  nameInput.name = 'name';
  nameInput.setAttribute('required', '');

  nameDiv.append(nameLabel, nameInput);

  const emailAddressDiv = document.createElement('div');

  const emailAddressLabel = document.createElement('label');
  emailAddressLabel.for = 'email';
  emailAddressLabel.textContent = 'Email Address';

  const emailAddressInput = document.createElement('input');
  emailAddressInput.type = 'email';
  emailAddressInput.id = 'email';
  emailAddressInput.name = 'email';
  emailAddressInput.setAttribute('required', '');

  emailAddressDiv.append(emailAddressLabel, emailAddressInput);

  const messageDiv = document.createElement('div');

  const messageLabel = document.createElement('label');
  messageLabel.for = 'message';
  messageLabel.textContent = 'Message';

  const messageInput = document.createElement('textarea');
  messageInput.name = 'message';
  messageInput.id = 'message';
  messageInput.cols = '30';
  messageInput.rows = '7';
  messageInput.setAttribute('required', '');

  messageDiv.append(messageLabel, messageInput);

  const submitBtn = document.createElement('button');
  submitBtn.type = 'button';
  submitBtn.textContent = 'Submit';

  feedbackForm.append(nameDiv, emailAddressDiv, messageDiv, submitBtn);

  feedbackSection.append(feedbackSectionHeading, feedbackForm);

  contactContent.append(contactInfoSection, socmedInfoSection, feedbackSection);

  contactDiv.append(header, contactContent);

  const pageContent = document.querySelector('#content');
  pageContent.append(contactDiv);
}