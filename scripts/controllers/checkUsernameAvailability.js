import { fetchLocalStorage } from '../model/fetchLocalStorage.js';
import { renderErrorMessage } from '../controllers/renderErrorMessage.js';
import { registerNewUser } from '../controllers/registerNewUser.js';

export const checkUsernameAvailability = (name, password) => {
  const registeredUsers = fetchLocalStorage('registeredUsers');
  // Checks if submitted username is already in use.
  const nameNotAvailable = registeredUsers.some(registeredUser =>
    Object.values(registeredUser).includes(name)
  );
  // If username not available, render error message.
  if (nameNotAvailable) {
    renderErrorMessage('the username is already in use', '.register');
  } else {
    // Creates new user object, with logged in status set to true.
    const newUser = {
      name,
      password,
      isLoggedIn: true,
      imgUrl: 'img/donald_trump.jpg',
    };
    registerNewUser(newUser);
  }
};
