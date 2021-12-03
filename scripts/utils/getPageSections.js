export const getPageSections = () => {
  const rootDiv = document.getElementById('root');
  const header = document.createElement('header');
  const main = document.createElement('main');
  const footerHeading = document.createElement('h3');
  footerHeading.textContent = 'Alexander Rusiecki';
  const footer = document.createElement('footer');
  footer.appendChild(footerHeading);
  return { rootDiv, header, main, footer };
};
