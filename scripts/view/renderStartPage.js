import { logOutUser } from '../controllers/logOutUser.js';

export const renderStartPage = loggedInUser => {
  const { name, isLoggedIn, imgUrl } = loggedInUser;
  if (isLoggedIn) {
    const header = document.querySelector('header');
    const main = document.querySelector('main');

    const avatar = document.createElement('img');
    avatar.src = imgUrl;

    const logOutButton = document.createElement('button');
    logOutButton.innerText = 'logout';

    const nameHeading = document.createElement('h1');
    nameHeading.textContent = `Welcome ${name}!`;

    logOutButton.addEventListener('click', () => {
      logOutUser(loggedInUser);
    });
    header.innerHTML = '';
    header.append(avatar, logOutButton);
    main.innerHTML = '';
    main.append(nameHeading);
  }
};
