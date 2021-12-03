import { fetchLocalStorage } from './model/fetchLocalStorage.js';
import { checkIfUserLoggedIn } from './controllers/checkIfUserLoggedIn.js';

export const rootDiv = document.getElementById('root');
export const header = document.createElement('header');
export const main = document.createElement('main');
export const footer = document.createElement('footer');
footer.insertAdjacentHTML('afterbegin', '<h3>Login - Logout - Register</h3>');

const registeredUsers = fetchLocalStorage('registeredUsers');

checkIfUserLoggedIn(registeredUsers);
