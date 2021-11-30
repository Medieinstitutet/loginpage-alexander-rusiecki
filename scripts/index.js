import { renderForm } from './view/renderForm.js';
import { renderFooter } from './view/renderFooter.js';
import { fetchLocalStorage } from './model/fetchLocalStorage.js';
import { checkUserCredentials } from './controllers/checkUserCredentials.js';
import { checkUsernameAvailability } from './controllers/checkUsernameAvailability.js';
import { clearInputField } from './utils/clearInputField.js';

const loginForm = renderForm('login');
const registerNewUserForm = renderForm('register');
renderFooter();

fetchLocalStorage('registeredUsers');

loginForm.addEventListener('submit', e => {
  e.preventDefault();
  const name = loginForm.userName.value;
  const password = loginForm.userPassword.value;
  if (name && password) {
    checkUserCredentials(name, password);
    clearInputField('userName');
    clearInputField('userPassword');
  }
});

registerNewUserForm.addEventListener('submit', e => {
  e.preventDefault();
  const name = registerNewUserForm.newUserName.value;
  const password = registerNewUserForm.newUserPassword.value;
  if (name && password) {
    checkUsernameAvailability(name, password);
    clearInputField('newUserName');
    clearInputField('newUserPassword');
  }
});
