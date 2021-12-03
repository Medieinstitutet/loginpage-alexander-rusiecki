import { fetchLocalStorage } from '../model/fetchLocalStorage.js';
import { checkIfUserLoggedIn } from '../controllers/checkIfUserLoggedIn.js';
import { updateAndFetchLocalStorage } from '../model/updateAndFetchLocalStorage.js';

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
  registeredUsers = updateAndFetchLocalStorage('registeredUsers', updatedArray);
  checkIfUserLoggedIn(registeredUsers);
};
