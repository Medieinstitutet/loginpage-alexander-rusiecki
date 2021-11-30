export const renderErrorMessage = () => {
  const rootDiv = document.getElementById('root');
  const errorParagraph = document.createElement('p');
  errorParagraph.textContent = 'invalid input, try again';
  rootDiv.appendChild(errorParagraph);
};
