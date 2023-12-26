// cart-product-quantity.js
import { renderCart } from '../cart.js';

export function cartProductQuantity(data) {
    updateQuantityEventListeners(data);
}

function updateQuantity(itemId, amount, data, textCounter) {
    
    const updatedData = data.map(item => {
        if (item._id === itemId) {
            const newQuantity = Math.max(0, item.quantity + amount);
            textCounter.textContent = newQuantity;

            if (newQuantity === 0) {
                return null;
            }

            return { ...item, quantity: newQuantity };
        }
        return item;
    });

    const filteredData = updatedData.filter(item => item !== null);


    localStorage.setItem('cart', JSON.stringify(filteredData));

    renderCart(filteredData);
}

function updateQuantityEventListeners(data) {
    data.forEach(({ _id }) => {
        const decreaseBtn = document.querySelector(`.cart-product-count-decrease[data-decrease="${_id}"]`);
        const increaseBtn = document.querySelector(`.cart-product-count-increase[data-increase="${_id}"]`);
        const textCounter = document.querySelector(`.cart-product-count-text[data-count="${_id}"]`);

        if (decreaseBtn && increaseBtn) {
            decreaseBtn.addEventListener('click', () => updateQuantity(_id, -1, data, textCounter));
            increaseBtn.addEventListener('click', () => updateQuantity(_id, 1, data, textCounter));
        }
    });
}
