import { logOutUser } from '../controllers/logOutUser.js';
import { renderFooter } from '../view/renderFooter.js';

export const renderStartPage = loggedInUser => {
  const { name, isLoggedIn, imgUrl } = loggedInUser;
  if (isLoggedIn) {
    const rootDiv = document.getElementById('root');
    const header = document.createElement('header');
    const main = document.createElement('main');

    const avatar = document.createElement('img');
    avatar.src = imgUrl;

    const logOutButton = document.createElement('button');
    logOutButton.innerText = 'logout';

    const nameHeading = document.createElement('h1');
    nameHeading.textContent = `Welcome ${name}!`;

    rootDiv.innerHTML = '';

    header.append(avatar, logOutButton);
    main.append(nameHeading);
    rootDiv.append(header, main);
    renderFooter();
    logOutButton.addEventListener('click', () => {
      rootDiv.innerHTML = '';
      logOutUser(loggedInUser);
    });
  }
};
