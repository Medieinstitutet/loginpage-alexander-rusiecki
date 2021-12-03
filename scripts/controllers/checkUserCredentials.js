import { fetchLocalStorage } from '../model/fetchLocalStorage.js';
import { updateLocalStorage } from '../model/updateLocalStorage.js';
import { renderLoggedInPage } from '../view/renderLoggedInPage.js';
import { renderErrorMessage } from '../controllers/renderErrorMessage.js';

export const checkUserCredentials = (name, password) => {
  let registeredUsers = fetchLocalStorage('registeredUsers');
  let foundUser = registeredUsers.find(user => user.name === name);
  if (foundUser && foundUser.password === password) {
    let loggedInUser = { ...foundUser, isLoggedIn: true };
    let updatedArray = registeredUsers.map(registeredUser =>
      registeredUser.name === name ? loggedInUser : registeredUser
    );
    updateLocalStorage('registeredUsers', updatedArray);
    registeredUsers = fetchLocalStorage('registeredUsers');
    foundUser = registeredUsers.find(user => user.name === name);
    renderLoggedInPage(foundUser);
  } else {
    renderErrorMessage('Please enter a valid name and password', 'header');
  }
};
