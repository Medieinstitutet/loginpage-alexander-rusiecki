import { fetchLocalStorage } from '../model/fetchLocalStorage.js';
import { updateAndFetchLocalStorage } from '../model/updateAndFetchLocalStorage.js';
import { checkIfUserLoggedIn } from '../controllers/checkIfUserLoggedIn.js';

export const logOutUser = user => {
  let registeredUsers = fetchLocalStorage('registeredUsers');
  // Sets user logged in status to false (spread operator).
  const loggedOutUser = { ...user, isLoggedIn: false };
  // Updates registered users with correct logged in statuses.
  const updatedArray = registeredUsers.map(registeredUser =>
    registeredUser.isLoggedIn ? loggedOutUser : registeredUser
  );
  registeredUsers = updateAndFetchLocalStorage('registeredUsers', updatedArray);
  checkIfUserLoggedIn(registeredUsers);
};
