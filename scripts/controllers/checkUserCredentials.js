import { fetchLocalStorage } from '../model/fetchLocalStorage.js';
import { updateLocalStorage } from '../model/updateLocalStorage.js';
import { renderStartPage } from '../view/renderStartPage.js';
import { renderErrorMessage } from '../controllers/renderErrorMessage.js';

export const checkUserCredentials = (name, password) => {
  let registeredUsers = fetchLocalStorage('registeredUsers');
  let foundUser = registeredUsers.find(user => user.name === name);
  if (foundUser && foundUser.password === password) {
    let loggedInUser = { ...foundUser, isLoggedIn: true };
    let updatedArray = registeredUsers.map(user => {
      if (user.name === name) {
        user = loggedInUser;
        return user;
      } else {
        return user;
      }
    });
    updateLocalStorage('registeredUsers', updatedArray);
    registeredUsers = fetchLocalStorage('registeredUsers');
    foundUser = registeredUsers.find(user => user.name === name);
    renderStartPage(foundUser);
  } else {
    renderErrorMessage();
  }
};
