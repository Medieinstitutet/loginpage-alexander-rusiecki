import { renderLoggedInPage } from '../view/renderLoggedInPage.js';
import { renderForm } from '../view/renderForm.js';
import { checkUserCredentials } from './checkUserCredentials.js';
import { checkUsernameAvailability } from './checkUsernameAvailability.js';

export const checkIfUserLoggedIn = registeredUsers => {
  const loggedInUser = registeredUsers.find(user => user.isLoggedIn);

  if (loggedInUser) {
    renderLoggedInPage(loggedInUser);
  } else {
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
      const name = loginForm.userName.value;
      const password = loginForm.userPassword.value;
      if (name && password) {
        checkUserCredentials(name, password);
      }
    });

    registerNewUserForm.addEventListener('submit', e => {
      e.preventDefault();
      const name = registerNewUserForm.newUserName.value;
      const password = registerNewUserForm.newUserPassword.value;
      if (name && password) {
        checkUsernameAvailability(name, password);
        registerNewUserForm.reset();
      }
    });
  }
};
