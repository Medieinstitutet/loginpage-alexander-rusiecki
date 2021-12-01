import { logOutUser } from '../controllers/logOutUser.js';

export const renderStartPage = foundUser => {
  const { name, isLoggedIn, imgUrl } = foundUser;
  if (isLoggedIn) {
    const header = document.querySelector('header');
    const main = document.querySelector('main');
    header.innerHTML = '';
    main.innerHTML = '';
    const avatar = document.createElement('img');
    const logOutButton = document.createElement('button');
    logOutButton.innerText = 'logout';
    const nameHeading = document.createElement('h1');
    nameHeading.textContent = `Welcome ${name}`;
    avatar.src = imgUrl;
    logOutButton.addEventListener('click', () => {
      logOutUser(foundUser);
    });
    header.append(avatar, logOutButton);
    main.append(nameHeading);
  }
};
