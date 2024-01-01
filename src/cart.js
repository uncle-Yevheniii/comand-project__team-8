import { emptyCartMarkup } from './js/empty-basket';
import { cartDeleteAll } from './js/cart-delete-all';
import { basketMarkup } from './js/basket-markup';
import { changeQuantity } from './js/cart-quantity';
import { cartRemoveItem } from './js/cart-remove-item';
import { cartProductQuantity } from './js/cart-product-quantity';

const cart = document.querySelector('.js-basket');

const USER_CART = JSON.parse(localStorage.getItem('cart')) || [];

export function renderCart(data) {
  changeQuantity();
  if (data.length === 0) {
    cart.innerHTML = emptyCartMarkup;
  } else {
    cart.innerHTML = basketMarkup(data);
  }
  cartDeleteAll();
  cartRemoveItem(data);
  cartProductQuantity(data);
}

renderCart(USER_CART);
