import { renderCart } from '../cart.js';

export function cartRemoveItem(data) {
    const cart = document.querySelector('.cart-with-items-list');
    
    if (cart) {
        cart.addEventListener('click', e => {
            const itemId = e.target.dataset.remove;

            if (itemId) {
                const updatedCart = data.filter(item => item._id !== itemId);

                localStorage.setItem('cart', JSON.stringify(updatedCart));
                renderCart(updatedCart);
            }
        });
    }
}
