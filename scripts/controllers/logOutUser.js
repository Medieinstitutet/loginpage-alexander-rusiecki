import { fetchLocalStorage } from '../model/fetchLocalStorage.js';
import { updateLocalStorage } from '../model/updateLocalStorage.js';
import { renderForm } from '../view/renderForm.js';
import { renderFooter } from '../view/renderFooter.js';
import { displayLoggedInUser } from '../view/displayLoggedInUser.js';
import { checkUserCredentials } from '../controllers/checkUserCredentials.js';
import { clearInputField } from '../utils/clearInputField.js';
import { checkUsernameAvailability } from '../controllers/checkUsernameAvailability.js';

export const logOutUser = user => {
  let registeredUsers = fetchLocalStorage('registeredUsers');
  let loggedOutUser = { ...user, isLoggedIn: false };
  let updatedArray = registeredUsers.map(registeredUser => {
    if (registeredUser.isLoggedIn === true) {
      registeredUser = loggedOutUser;
      return registeredUser;
    } else {
      return registeredUser;
    }
  });
  updateLocalStorage('registeredUsers', updatedArray);
  registeredUsers = fetchLocalStorage('registeredUsers');
  const rootDiv = document.getElementById('root');
  rootDiv.innerHTML = '';
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
  renderFooter();
  displayLoggedInUser(registeredUsers);

  loginForm.addEventListener('submit', e => {
    e.preventDefault();
    const name = loginForm.userName.value;
    const password = loginForm.userPassword.value;
    if (name && password) {
      checkUserCredentials(name, password);
      // clearInputField('userName');
      // clearInputField('userPassword');
    }
  });

  registerNewUserForm.addEventListener('submit', e => {
    e.preventDefault();
    const name = registerNewUserForm.newUserName.value;
    const password = registerNewUserForm.newUserPassword.value;
    if (name && password) {
      checkUsernameAvailability(name, password);
      // clearInputField('newUserName');
      // clearInputField('newUserPassword');
    }
  });
};
