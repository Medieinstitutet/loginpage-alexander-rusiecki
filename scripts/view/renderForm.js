import { getPageSections } from '../utils/getPageSections.js';

export const renderForm = (
  nameId,
  namePlaceholder,
  passwordId,
  passwordPlaceholder,
  buttonText
) => {
  const { rootDiv, header, main, footer } = getPageSections();

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
    header.appendChild(form);
    rootDiv.appendChild(header);
  } else {
    main.appendChild(form);
    rootDiv.appendChild(main);
    rootDiv.insertAdjacentElement('beforeend', footer);
  }
  return { form, header, main };
};
