export const fetchLocalStorage = key => {
  if (localStorage.getItem(key) === null) {
    localStorage.setItem(
      'registeredUsers',
      JSON.stringify([
        {
          name: 'janne',
          password: 'test',
          isLoggedIn: false,
        },
        {
          name: 'alex',
          password: 'psw123',
          isLoggedIn: false,
        },
      ])
    );
    return JSON.parse(localStorage.getItem(key));
  } else {
    return JSON.parse(localStorage.getItem(key));
  }
};
