import { fetchLocalStorage } from '../model/fetchLocalStorage.js';
import { updateLocalStorage } from '../model/updateLocalStorage.js';
import { renderStartPage } from '../view/renderStartPage.js';
import { renderErrorMessage } from '../controllers/renderErrorMessage.js';

export const checkUserCredentials = (name, password) => {
  let registeredUsers = fetchLocalStorage('registeredUsers');
  let foundUser = registeredUsers.find(user => user.name === name);
  if (foundUser && foundUser.password === password) {
    let loggedInUser = { ...foundUser, isLoggedIn: true };
    let updatedArray = registeredUsers.map(registeredUser => {
      if (registeredUser.name === name) {
        registeredUser = loggedInUser;
        return registeredUser;
      } else {
        return registeredUser;
      }
    });
    updateLocalStorage('registeredUsers', updatedArray);
    registeredUsers = fetchLocalStorage('registeredUsers');
    foundUser = registeredUsers.find(user => user.name === name);
    renderStartPage(foundUser);
  } else {
    renderErrorMessage('Please enter a valid name and password', 'header');
  }
};
