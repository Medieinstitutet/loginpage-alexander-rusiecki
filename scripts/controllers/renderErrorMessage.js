// Creates error message with error message argument and appends it to right element.
export const renderErrorMessage = (errorMessage, className) => {
  const parentElement = document.querySelector(className);
  const errorParagraph = document.createElement('p');
  errorParagraph.textContent = errorMessage;
  parentElement.appendChild(errorParagraph);
};
