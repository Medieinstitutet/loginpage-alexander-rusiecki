import { fetchLocalStorage } from '../model/fetchLocalStorage.js';
import { updateAndFetchLocalStorage } from '../model/updateAndFetchLocalStorage.js';
import { checkIfUserLoggedIn } from '../controllers/checkIfUserLoggedIn.js';

/*
Finds user at user argument.
Changes user logged in status to false.
Updates registered users array with users, now with correct logged in statuses.
Updates registered users array, updates and fetches new state from local storage.
*/
export const logOutUser = user => {
  let registeredUsers = fetchLocalStorage('registeredUsers');
  let loggedOutUser = { ...user, isLoggedIn: false };
  let updatedArray = registeredUsers.map(registeredUser =>
    registeredUser.isLoggedIn ? loggedOutUser : registeredUser
  );
  registeredUsers = updateAndFetchLocalStorage('registeredUsers', updatedArray);
  checkIfUserLoggedIn(registeredUsers);
};
