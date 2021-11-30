import { fetchLocalStorage } from './model/fetchLocalStorage.js';
import { registerNewUser } from './controllers/registerNewUser.js';
import { clearInputField } from './utils/clearInputField.js';

const rootDiv = document.getElementById('root');

const header = document.createElement('header');
const main = document.createElement('main');
const footer = document.createElement('footer');

const loginForm = document.createElement('form');
const userNameInput = document.createElement('input');
userNameInput.id = 'userName';
userNameInput.placeholder = 'enter username';
const userPasswordInput = document.createElement('input');
userPasswordInput.id = 'userPassword';
userPasswordInput.placeholder = 'enter password';
const loginButton = document.createElement('button');
loginButton.innerText = 'login';

loginForm.append(userNameInput, userPasswordInput, loginButton);

const registerNewUserForm = document.createElement('form');
const newUserNameInput = document.createElement('input');
newUserNameInput.id = 'newUserName';
newUserNameInput.placeholder = 'choose username';
const newUserPasswordInput = document.createElement('input');
newUserPasswordInput.id = 'newUserPassword';
newUserPasswordInput.placeholder = 'choose password';
const registerNewUserButton = document.createElement('button');
registerNewUserButton.innerText = 'register';

registerNewUserForm.append(
  newUserNameInput,
  newUserPasswordInput,
  registerNewUserButton
);

header.appendChild(loginForm);
main.appendChild(registerNewUserForm);

rootDiv.append(header, main);

fetchLocalStorage('registeredUsers');

loginForm.addEventListener('submit', e => {
  e.preventDefault();
  const name = loginForm.userName.value;
  const password = loginForm.userPassword.value;
  console.log(name, password);
  clearInputField('userName');
  clearInputField('userPassword');
});

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
