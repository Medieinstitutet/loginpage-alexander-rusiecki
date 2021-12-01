import { fetchLocalStorage } from './model/fetchLocalStorage.js';
import { checkIfUserLoggedIn } from './controllers/checkIfUserLoggedIn.js';

const registeredUsers = fetchLocalStorage('registeredUsers');

checkIfUserLoggedIn(registeredUsers);
