import { fetchLocalStorage } from '../model/fetchLocalStorage.js';
import { updateAndFetchLocalStorage } from '../model/updateAndFetchLocalStorage.js';
import { renderLoggedInPage } from '../view/renderLoggedInPage.js';

export const registerNewUser = newUser => {
  // Fetches registered users.
  let registeredUsers = fetchLocalStorage('registeredUsers');
  // Updates registered users array with newly registered user (spread operator).
  registeredUsers = [...registeredUsers, newUser];
  registeredUsers = updateAndFetchLocalStorage(
    'registeredUsers',
    registeredUsers
  );
  // Finds logged in user.
  const loggedInUser = registeredUsers.find(
    registeredUser => registeredUser.isLoggedIn
  );
  renderLoggedInPage(loggedInUser);
};
