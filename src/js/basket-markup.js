import { cartTotalPrice } from './cartTotalPrice';

export function basketMarkup(USER_CART) {
    const cart = `
        <div class="cart-with-items-container">
        
            <div class="cart-delete-all">
                <p class="cart-delete-all-text">Delete all</p>
                <button type="button" class="cart-delete-all-btn">X</button>
            </div>

            <ul class="cart-with-items-list">
            ${USER_CART.map(
                ({ category, img, name, price, size, _id }) => `
                <li class="cart-product-list" data-cart-product-id=${_id}>
                    <div class="cart-product-img-container">
                        <img class="cart-product-img" src=${img} alt=${name}/>
                    </div>
                </li>
                `
            ).join('')}
            </ul>

        </div>
        <div class="cart-order-container">
                <h2 class="cart-order-title">Your Order</h2>
                <div class="cart-order-total">
                    <p class="cart-order-text-total">Total</p>
                    <div class="cart-order-sum-container">
                        <p class="cart-order-sum">
                            <span class="cart-order-text-sum">
                            Sum:
                            </span>
                            $${cartTotalPrice(USER_CART)}
                            </p>
                    </div>
                </div>
                <form class="cart-form-order-input">
                    <input type="email" name="user-email" id="user-email" class="cart-form-order-mail-input" placeholder="Enter your email" pattern="[_\-a-zA-Z0-9\.\+]+@[a-zA-Z0-9](\.?[\-a-zA-Z0-9]*[a-zA-Z0-9])*" required/>
                    <button type="submit" class="cart-form-btn">Checkout</button>
                </form>
            </div>
    `;
    return cart
};

