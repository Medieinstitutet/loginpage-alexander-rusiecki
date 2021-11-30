import { fetchLocalStorage } from '../model/fetchLocalStorage.js';
import { registerNewUser } from '../controllers/registerNewUser.js';
import { renderErrorMessage } from '../controllers/renderErrorMessage.js';

export const checkUsernameAvailability = (name, password) => {
  let registeredUsers = fetchLocalStorage('registeredUsers');
  let nameNotAvailable = registeredUsers.some(registeredUser =>
    Object.values(registeredUser).includes(name)
  );
  if (nameNotAvailable) {
    renderErrorMessage('The chosen username is already taken');
  } else {
    const newUser = {
      name,
      password,
      isLoggedIn: false,
      imgUrl: '../../img/donald_trump.jpg',
    };
    registerNewUser(newUser);
  }
};
