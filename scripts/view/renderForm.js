import { rootDiv, header, main, footer } from '../index.js';

// Function that creates and returns forms dynamically when invoked.
export const renderForm = (
  nameId,
  namePlaceholder,
  passwordId,
  passwordPlaceholder,
  buttonText
) => {
  const logo = document.createElement('img');
  logo.src = '/../img/logo.jpg';

  const form = document.createElement('form');
  form.setAttribute('class', buttonText);

  const nameInput = document.createElement('input');
  nameInput.id = nameId;
  nameInput.placeholder = namePlaceholder;

  const passwordInput = document.createElement('input');
  passwordInput.id = passwordId;
  passwordInput.placeholder = passwordPlaceholder;

  const submitButton = document.createElement('button');
  submitButton.innerText = buttonText;

  form.append(nameInput, passwordInput, submitButton);

  const formClass = form.getAttribute('class');
  if (formClass === 'login') {
    // Creates login form.
    header.append(logo, form);
    rootDiv.appendChild(header);
  } else {
    // Creates register new user form.
    main.appendChild(form);
    rootDiv.appendChild(main);
    rootDiv.insertAdjacentElement('beforeend', footer);
  }
  return form;
};
