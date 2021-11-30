export const renderErrorMessage = errorMessage => {
  const rootDiv = document.getElementById('root');
  const errorParagraph = document.createElement('p');
  errorParagraph.textContent = errorMessage;
  rootDiv.appendChild(errorParagraph);
};
