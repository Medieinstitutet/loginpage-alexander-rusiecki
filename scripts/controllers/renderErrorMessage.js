export const renderErrorMessage = (errorMessage, appendTo) => {
  const element = document.getElementsByTagName(appendTo);
  const errorParagraph = document.createElement('p');
  errorParagraph.textContent = errorMessage;
  element[0].append(errorParagraph);
};
