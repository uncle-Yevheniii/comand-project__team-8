const basedParameters = {
  keyword: null,
  category: null,
  page: 1,
  limit: 6,
  cart: [],
};

export function localStorageSettings() {
  localStorage.setItem('settings', JSON.stringify(basedParameters));
  const savedSettings = localStorage.getItem('settings');
  const parsedSettings = JSON.parse(savedSettings);
  console.log(parsedSettings);
}
