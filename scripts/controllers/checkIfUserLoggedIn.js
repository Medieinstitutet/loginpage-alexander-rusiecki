import { renderLoggedInPage } from '../view/renderLoggedInPage.js';
import { renderForm } from '../view/renderForm.js';
import { checkUserCredentials } from './checkUserCredentials.js';
import { checkUsernameAvailability } from './checkUsernameAvailability.js';

export const checkIfUserLoggedIn = registeredUsers => {
  // Finds logged in user.
  const loggedInUser = registeredUsers.find(user => user.isLoggedIn);

  if (loggedInUser) {
    // If any logged in user is found.
    renderLoggedInPage(loggedInUser);
  } else {
    // If no logged in user is found, creates login and register forms.
    const loginForm = renderForm(
      'userName',
      'enter username',
      'userPassword',
      'enter password',
      'login'
    );
    const registerNewUserForm = renderForm(
      'newUserName',
      'choose username',
      'newUserPassword',
      'choose password',
      'register'
    );

    loginForm.addEventListener('submit', e => {
      e.preventDefault();
      // Gets input values.
      const name = loginForm.userName.value;
      const password = loginForm.userPassword.value;
      // If input fields are filled in.
      if (name && password) {
        // Checks if correct username and password is submitted.
        checkUserCredentials(name, password);
      }
    });

    registerNewUserForm.addEventListener('submit', e => {
      e.preventDefault();
      // Gets input values.
      const name = registerNewUserForm.newUserName.value;
      const password = registerNewUserForm.newUserPassword.value;
      // If input fields are filled in.
      if (name && password) {
        // Checks if chosen username is available.
        checkUsernameAvailability(name, password);
        registerNewUserForm.reset();
      }
    });
  }
};
