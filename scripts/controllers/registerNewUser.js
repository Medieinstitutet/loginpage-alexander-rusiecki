import { fetchLocalStorage } from '../model/fetchLocalStorage.js';
import { updateLocalStorage } from '../model/updateLocalStorage.js';
import { renderStartPage } from '../view/renderStartPage.js';

export const registerNewUser = newUser => {
  let registeredUsers = fetchLocalStorage('registeredUsers');
  let loggedInUser = registeredUsers.find(
    registeredUser => registeredUser.isLoggedIn
  );
  let updatedArray = registeredUsers.map(registredUser => {
    if (registredUser.isLoggedIn) {
      return { ...registredUser, isLoggedIn: false };
    } else {
      return registredUser;
    }
  });
  updatedArray.push(newUser);
  updateLocalStorage('registeredUsers', updatedArray);
  registeredUsers = fetchLocalStorage('registeredUsers');
  loggedInUser = registeredUsers.find(
    registeredUser => registeredUser.isLoggedIn
  );
  renderStartPage(loggedInUser);
};
