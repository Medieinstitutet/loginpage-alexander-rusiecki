import { getPageSections } from '../utils/getPageSections.js';
import { logOutUser } from '../controllers/logOutUser.js';

export const renderLoggedInPage = loggedInUser => {
  const { name, isLoggedIn, imgUrl } = loggedInUser;
  const { rootDiv, header, main, footer } = getPageSections();

  if (isLoggedIn) {
    const avatar = document.createElement('img');
    avatar.src = imgUrl;

    const logOutButton = document.createElement('button');
    logOutButton.innerText = 'logout';

    const nameHeading = document.createElement('h1');
    nameHeading.textContent = `What´s up ${name} 😜`;

    rootDiv.innerHTML = '';

    header.append(avatar, logOutButton);
    main.appendChild(nameHeading);
    rootDiv.append(header, main, footer);
    logOutButton.addEventListener('click', () => {
      rootDiv.innerHTML = '';
      logOutUser(loggedInUser);
    });
  }
};
