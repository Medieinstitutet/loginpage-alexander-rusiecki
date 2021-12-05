import { fetchLocalStorage } from '../model/fetchLocalStorage.js';
import { updateAndFetchLocalStorage } from '../model/updateAndFetchLocalStorage.js';
import { renderLoggedInPage } from '../view/renderLoggedInPage.js';
import { renderErrorMessage } from '../view/renderErrorMessage.js';

export const checkUserCredentials = (name, password) => {
  const form = document.querySelector('.login');
  let registeredUsers = fetchLocalStorage('registeredUsers');
  // Finds right user by name.
  const foundUser = registeredUsers.find(user => user.name === name);
  // If correct login credentials.
  if (foundUser && foundUser.password === password) {
    // Sets user logged in status to true (spread operator).
    let loggedInUser = { ...foundUser, isLoggedIn: true };
    // Updates registered users.
    registeredUsers = registeredUsers.map(registeredUser =>
      registeredUser.name === name ? loggedInUser : registeredUser
    );
    registeredUsers = updateAndFetchLocalStorage(
      'registeredUsers',
      registeredUsers
    );
    // Finds right user by logged in status.
    loggedInUser = registeredUsers.find(user => user.isLoggedIn);
    renderLoggedInPage(loggedInUser);
  } else {
    renderErrorMessage('Please enter a valid username and password', '.login');
    form.reset();
  }
};
