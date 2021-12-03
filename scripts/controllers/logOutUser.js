import { fetchLocalStorage } from '../model/fetchLocalStorage.js';
import { updateAndFetchLocalStorage } from '../model/updateAndFetchLocalStorage.js';
import { checkIfUserLoggedIn } from '../controllers/checkIfUserLoggedIn.js';

export const logOutUser = user => {
  let registeredUsers = fetchLocalStorage('registeredUsers');
  let loggedOutUser = { ...user, isLoggedIn: false };
  let updatedArray = registeredUsers.map(registeredUser =>
    registeredUser.isLoggedIn ? loggedOutUser : registeredUser
  );
  registeredUsers = updateAndFetchLocalStorage('registeredUsers', updatedArray);
  checkIfUserLoggedIn(registeredUsers);
};
