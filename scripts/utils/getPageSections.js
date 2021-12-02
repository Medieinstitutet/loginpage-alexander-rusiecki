export const getPageSections = () => {
  const rootDiv = document.getElementById('root');
  const header = document.createElement('header');
  const main = document.createElement('main');
  const footer = document.createElement('footer');
  return { rootDiv, header, main, footer };
};
