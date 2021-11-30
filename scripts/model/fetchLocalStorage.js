import { registeredUsers } from './registeredUsers.js';

export const fetchLocalStorage = key => {
  if (localStorage.getItem(key) === null) {
    localStorage.setItem('registeredUsers', JSON.stringify(registeredUsers));
    return JSON.parse(localStorage.getItem(key));
  } else {
    return JSON.parse(localStorage.getItem(key));
  }
};
