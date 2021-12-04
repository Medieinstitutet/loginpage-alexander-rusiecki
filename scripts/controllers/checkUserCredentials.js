import { fetchLocalStorage } from '../model/fetchLocalStorage.js';
import { updateAndFetchLocalStorage } from '../model/updateAndFetchLocalStorage.js';
import { renderLoggedInPage } from '../view/renderLoggedInPage.js';
import { renderErrorMessage } from '../controllers/renderErrorMessage.js';

export const checkUserCredentials = (name, password) => {
  const form = document.querySelector('.login');
  let registeredUsers = fetchLocalStorage('registeredUsers');
  // Finds right user by name.
  let foundUser = registeredUsers.find(user => user.name === name);
  // If correct login credentials.
  if (foundUser && foundUser.password === password) {
    // Sets user logged in status to true (spread operator).
    const loggedInUser = { ...foundUser, isLoggedIn: true };
    // Updates registered users.
    registeredUsers = registeredUsers.map(registeredUser =>
      registeredUser.name === name ? loggedInUser : registeredUser
    );
    registeredUsers = updateAndFetchLocalStorage(
      'registeredUsers',
      registeredUsers
    );
    // Finds right user by name.
    foundUser = registeredUsers.find(user => user.name === name);
    renderLoggedInPage(foundUser);
  } else {
    renderErrorMessage('Please enter a valid name and password', '.login');
    form.reset();
  }
};
