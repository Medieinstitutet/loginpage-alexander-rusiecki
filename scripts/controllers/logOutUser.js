import { fetchLocalStorage } from '../model/fetchLocalStorage.js';
import { updateLocalStorage } from '../model/updateLocalStorage.js';
import { checkIfUserLoggedIn } from '../controllers/checkIfUserLoggedIn.js';

export const logOutUser = user => {
  let registeredUsers = fetchLocalStorage('registeredUsers');
  let loggedOutUser = { ...user, isLoggedIn: false };
  let updatedArray = registeredUsers.map(registeredUser => {
    if (registeredUser.isLoggedIn) {
      return loggedOutUser;
    } else {
      return registeredUser;
    }
  });
  updateLocalStorage('registeredUsers', updatedArray);
  registeredUsers = fetchLocalStorage('registeredUsers');
  checkIfUserLoggedIn(registeredUsers);
};
