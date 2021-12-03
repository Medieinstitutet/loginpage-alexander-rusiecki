import { fetchLocalStorage } from '../model/fetchLocalStorage.js';
import { renderErrorMessage } from '../controllers/renderErrorMessage.js';
import { registerNewUser } from '../controllers/registerNewUser.js';

/*
Check if submitted username is available.
If avalable, creates new user object.
*/
export const checkUsernameAvailability = (name, password) => {
  let registeredUsers = fetchLocalStorage('registeredUsers');
  let nameNotAvailable = registeredUsers.some(registeredUser =>
    Object.values(registeredUser).includes(name)
  );
  if (nameNotAvailable) {
    renderErrorMessage('the username is already in use', '.register');
  } else {
    const newUser = {
      name,
      password,
      isLoggedIn: true,
      imgUrl: '../../img/donald_trump.jpg',
    };
    registerNewUser(newUser);
  }
};
