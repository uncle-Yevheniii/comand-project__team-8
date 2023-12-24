export function changeQuantity() {
    const quantity = document.querySelector('.js-cart-info');
    const quantityHeader = document.querySelector('.js-header-span')
    const USER_CART = JSON.parse(localStorage.getItem('cart')) || [];

    if (!!quantity) {
        quantity.textContent = USER_CART.length;
    }
    if (!!quantityHeader) {
        quantityHeader.textContent = USER_CART.length;
    }
};