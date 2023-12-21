import {emptyCartMarkup} from './js/empty-basket';

const cart = document.querySelector('.js-basket');
// const USER_CART = JSON.parse(localStorage.getItem('cart'));
const USER_CART = [];

function renderCart(data) {
    if (data.length === 0) {
        cart.innerHTML = emptyCartMarkup;
    }
};

renderCart(USER_CART)