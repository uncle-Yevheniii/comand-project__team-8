const basedParameters = {
  keyword: null,
  category: null,
  page: 1,
  limit: 6,
};

const cart = [];

export function localStorageSettings() {
  //
  if (!localStorage.getItem('settings')) {
    return localStorage.setItem('settings', JSON.stringify(basedParameters));
  }
  return;
}
export function localStorageCart() {
  //
  if (!localStorage.getItem('cart')) {
    return localStorage.setItem('cart', JSON.stringify(cart));
  }
  return;
}
