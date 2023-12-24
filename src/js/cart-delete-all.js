import { renderCart } from '../cart';
import {changeQuantity} from './cart-quantity'

export function cartDeleteAll() {
    const deleteAllBtn = document.querySelector('.cart-delete-all-btn');

    if (deleteAllBtn) {
        const callBack = () => {
            localStorage.setItem('cart', '[]');
            changeQuantity();
            renderCart([]);

            deleteAllBtn.removeEventListener('click', callBack);
        };

        deleteAllBtn.addEventListener('click', callBack);
    };
};