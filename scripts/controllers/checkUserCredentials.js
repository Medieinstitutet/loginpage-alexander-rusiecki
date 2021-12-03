import { fetchLocalStorage } from '../model/fetchLocalStorage.js';
import { updateAndFetchLocalStorage } from '../model/updateAndFetchLocalStorage.js';
import { renderLoggedInPage } from '../view/renderLoggedInPage.js';
import { renderErrorMessage } from '../controllers/renderErrorMessage.js';

/*
Checks user credentials with name and password arguments.
Finds the right user from local storage.
If correct login credentials, changes user logged in status to true.
Updates registered users array, updates and fetches new state from local storage.
Finds logged in user. 
*/
export const checkUserCredentials = (name, password) => {
  const form = document.querySelector('.login');
  let registeredUsers = fetchLocalStorage('registeredUsers');
  let foundUser = registeredUsers.find(user => user.name === name);
  if (foundUser && foundUser.password === password) {
    const loggedInUser = { ...foundUser, isLoggedIn: true };
    const updatedArray = registeredUsers.map(registeredUser =>
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
