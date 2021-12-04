import { registeredUsers } from './registeredUsers.js';

// Returns state from local storage. If local storage is empty, adds 2 registered users.
export const fetchLocalStorage = key => {
  if (localStorage.getItem(key) === null) {
    localStorage.setItem('registeredUsers', JSON.stringify(registeredUsers));
    return JSON.parse(localStorage.getItem(key));
  } else {
    return JSON.parse(localStorage.getItem(key));
  }
};
