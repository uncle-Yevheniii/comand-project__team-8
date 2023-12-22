import { renderCart } from '../cart';
import {changeQuantity} from './cart-quantity'

export function cartDeleteAll() {
    const deleteAllBtn = document.querySelector('.cart-delete-all-btn');

    deleteAllBtn.addEventListener('click', () => {
        localStorage.setItem('cart', '[]');
        changeQuantity();
        renderCart([]);
    });
};