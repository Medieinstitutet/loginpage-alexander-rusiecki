import { fetchLocalStorage } from '../model/fetchLocalStorage.js';
import { updateAndFetchLocalStorage } from '../model/updateAndFetchLocalStorage.js';
import { renderLoggedInPage } from '../view/renderLoggedInPage.js';
import { renderErrorMessage } from '../controllers/renderErrorMessage.js';

export const checkUserCredentials = (name, password) => {
  const form = document.querySelector('.login');
  let registeredUsers = fetchLocalStorage('registeredUsers');
  let foundUser = registeredUsers.find(user => user.name === name);
  if (foundUser && foundUser.password === password) {
    let loggedInUser = { ...foundUser, isLoggedIn: true };
    let updatedArray = registeredUsers.map(registeredUser =>
      registeredUser.name === name ? loggedInUser : registeredUser
    );
    registeredUsers = updateAndFetchLocalStorage(
      'registeredUsers',
      updatedArray
    );
    foundUser = registeredUsers.find(user => user.name === name);
    renderLoggedInPage(foundUser);
  } else {
    renderErrorMessage('Please enter a valid name and password', '.login');
    form.reset();
  }
};
