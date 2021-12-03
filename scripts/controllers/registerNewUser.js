import { fetchLocalStorage } from '../model/fetchLocalStorage.js';
import { updateAndFetchLocalStorage } from '../model/updateAndFetchLocalStorage.js';
import { renderLoggedInPage } from '../view/renderLoggedInPage.js';

export const registerNewUser = newUser => {
  let registeredUsers = fetchLocalStorage('registeredUsers');
  registeredUsers = [...registeredUsers, newUser];
  registeredUsers = updateAndFetchLocalStorage(
    'registeredUsers',
    registeredUsers
  );
  const loggedInUser = registeredUsers.find(
    registeredUser => registeredUser.isLoggedIn
  );
  renderLoggedInPage(loggedInUser);
};
