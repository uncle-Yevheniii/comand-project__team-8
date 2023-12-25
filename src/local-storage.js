const basedParameters = {
  keyword: null,
  category: null,
  page: 1,
  limit: 6,
};

const cart = [];

export function localStorageSettings() {
  localStorage.setItem('settings', JSON.stringify(basedParameters));
}
export function localStorageCart() {
  localStorage.setItem('cart', JSON.stringify(cart));
}
