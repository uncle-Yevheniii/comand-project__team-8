import { renderCart } from '../cart.js';

const cart = document.querySelector('.js-basket');

export function cartRemoveItem(data) {
    cart.addEventListener('click', e => {
        const updatedCart = data.filter(
            item => item._id !== e.target.dataset.remove
        );

        localStorage.setItem('cart', JSON.stringify(updatedCart));
        renderCart(updatedCart);
    });

};