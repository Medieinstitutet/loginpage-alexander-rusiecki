import { fetchLocalStorage } from './model/fetchLocalStorage.js';
import { checkIfUserLoggedIn } from './controllers/checkIfUserLoggedIn.js';

// Gets root element and creates 3 main sections to be imported in other file.
export const rootDiv = document.getElementById('root');
export const header = document.createElement('header');
export const main = document.createElement('main');
export const footer = document.createElement('footer');
footer.insertAdjacentHTML('afterbegin', '<h3>Login - Logout - Register</h3>');

// Gets current state
const registeredUsers = fetchLocalStorage('registeredUsers');

checkIfUserLoggedIn(registeredUsers);
