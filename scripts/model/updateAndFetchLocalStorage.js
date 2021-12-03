export const updateAndFetchLocalStorage = (key, data) => {
  localStorage.setItem(key, JSON.stringify(data));
  return JSON.parse(localStorage.getItem(key));
};
