import { logOutUser } from '../controllers/logOutUser.js';
import { rootDiv, header, main, footer } from '../index.js';

// Renders logged in page with currently logged in user.
export const renderLoggedInPage = loggedInUser => {
  // Destructures logged in user object.
  const { name, isLoggedIn, imgUrl } = loggedInUser;
  // If logged in user is found, creates DOM elements.
  if (isLoggedIn) {
    const avatar = document.createElement('img');
    avatar.src = `./${imgUrl}`;
    avatar.className = 'avatar';

    const logOutButton = document.createElement('button');
    logOutButton.innerText = 'logout';

    const nameHeading = document.createElement('h1');
    nameHeading.textContent = `What´s up ${name} 😜`;

    header.innerHTML = '';
    main.innerHTML = '';

    header.append(avatar, logOutButton);
    main.appendChild(nameHeading);
    rootDiv.append(header, main, footer);

    logOutButton.addEventListener('click', () => {
      header.innerHTML = '';
      main.innerHTML = '';
      // Logs out currently logged in user.
      logOutUser(loggedInUser);
    });
  }
};
