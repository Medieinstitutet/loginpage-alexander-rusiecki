export const renderForm = type => {
  const rootDiv = document.getElementById('root');
  const header = document.createElement('header');
  const main = document.createElement('main');
  if (type === 'login') {
    const loginForm = document.createElement('form');
    const userNameInput = document.createElement('input');
    userNameInput.id = 'userName';
    userNameInput.placeholder = 'enter username';
    const userPasswordInput = document.createElement('input');
    userPasswordInput.id = 'userPassword';
    userPasswordInput.placeholder = 'enter password';
    userPasswordInput.type = 'password';
    const loginButton = document.createElement('button');
    loginButton.innerText = 'login';
    loginForm.append(userNameInput, userPasswordInput, loginButton);
    header.appendChild(loginForm);
    rootDiv.append(header);
    return loginForm;
  } else {
    const registerNewUserForm = document.createElement('form');
    const newUserNameInput = document.createElement('input');
    newUserNameInput.id = 'newUserName';
    newUserNameInput.placeholder = 'choose username';
    const newUserPasswordInput = document.createElement('input');
    newUserPasswordInput.id = 'newUserPassword';
    newUserPasswordInput.placeholder = 'choose password';
    const registerNewUserButton = document.createElement('button');
    registerNewUserButton.innerText = 'register';
    registerNewUserForm.append(
      newUserNameInput,
      newUserPasswordInput,
      registerNewUserButton
    );
    main.appendChild(registerNewUserForm);
    rootDiv.append(main);
    return registerNewUserForm;
  }
};
