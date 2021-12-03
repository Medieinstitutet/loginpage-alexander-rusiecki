/* 
Updates local storage at given argument key with argument data.
Returns updated data at given argument key.
*/
export const updateAndFetchLocalStorage = (key, data) => {
  localStorage.setItem(key, JSON.stringify(data));
  return JSON.parse(localStorage.getItem(key));
};
