import { fetchLocalStorage } from './model/fetchLocalStorage.js';
import { registerNewUser } from './controllers/registerNewUser.js';
import { clearInputField } from './utils/clearInputField.js';

const rootDiv = document.getElementById('root');
const registerNewUserForm = document.createElement('form');
const newUserNameInput = document.createElement('input');
newUserNameInput.id = 'newUserName';
newUserNameInput.placeholder = 'enter username';
const newUserPasswordInput = document.createElement('input');
newUserPasswordInput.id = 'newUserPassword';
newUserPasswordInput.placeholder = 'enter password';
const registerNewUserButton = document.createElement('button');
registerNewUserButton.innerText = 'register';

registerNewUserForm.append(
  newUserNameInput,
  newUserPasswordInput,
  registerNewUserButton
);
rootDiv.appendChild(registerNewUserForm);

fetchLocalStorage('registeredUsers');

registerNewUserForm.addEventListener('submit', e => {
  e.preventDefault();
  const name = registerNewUserForm.newUserName.value;
  const password = registerNewUserForm.newUserPassword.value;
  const newUser = {
    name,
    password,
    isLoggedIn: false,
  };
  registerNewUser(newUser);
  clearInputField('newUserName');
  clearInputField('newUserPassword');
});
