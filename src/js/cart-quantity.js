export function changeQuantity() {
    const quantity = document.querySelector('.js-cart-info');
    const USER_CART = JSON.parse(localStorage.getItem('cart'));

    if (!!quantity) {
        quantity.textContent = USER_CART.length;
    }
    
};