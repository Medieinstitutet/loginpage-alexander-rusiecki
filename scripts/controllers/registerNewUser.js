import { fetchLocalStorage } from '../model/fetchLocalStorage.js';
import { updateLocalStorage } from '../model/updateLocalStorage.js';
import { renderLoggedInPage } from '../view/renderLoggedInPage.js';

export const registerNewUser = newUser => {
  let registeredUsers = fetchLocalStorage('registeredUsers');
  registeredUsers = [...registeredUsers, newUser];
  updateLocalStorage('registeredUsers', registeredUsers);
  registeredUsers = fetchLocalStorage('registeredUsers');
  const loggedInUser = registeredUsers.find(
    registeredUser => registeredUser.isLoggedIn
  );
  renderLoggedInPage(loggedInUser);
};
