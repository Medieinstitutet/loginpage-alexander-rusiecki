import { fetchLocalStorage } from '../model/fetchLocalStorage.js';
import { registerNewUser } from '../controllers/registerNewUser.js';

export const checkUsernameAvailability = (name, password) => {
  let registeredUsers = fetchLocalStorage('registeredUsers');
  let nameIsAvailable = registeredUsers.some(
    registeredName => registeredName !== name
  );
  if (nameIsAvailable) {
    const newUser = {
      name,
      password,
      isLoggedIn: false,
    };
    registerNewUser(newUser);
  }
};
