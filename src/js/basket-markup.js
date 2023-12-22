

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

            <div class="cart-order-container">
            
            </div>

        </div>
    `;
    return cart
};

export function cartMarkupFull(YOUR_CART) {
  const markupFullCart =
    `<div class="your-cart-container">
                <div class="delete-all">
                    <p class="delete-all-text">
                    Delete all
                    </p>
                        <button type="button" class="delete-all-btn">
                            <svg class="delete-all-icon">
                                <use href="${icons}#icon-remove"></use>
                            </svg>
                        </button>
                </div>
    <ul class="your-cart-list">` +
    YOUR_CART.map(
      ({ category, img, name, price, size, _id }) =>
            `<div class="cart-list-container">
            <li class="cart-product-card" data-product-id=${_id}>
                <div class="product-cart-container">
                    <img class="cart-product-img" src=${img} alt=${name} />
                </div>
            <div class="cart-product-card-discription">
                <div class="cart-product-card-info">
                    <p class="cart-product-name">${name}</p>
                    <div class="cart-product-features">
                        <p class="cart-product-category">Category: <span class="cart-product-category-span">${category}</span></p>
                        <p class="cart-product-size">Size: <span class="cart-product-size-span">${size}</span></p>
                    </div>
                    <p class="cart-product-price">${price}</p>
                </div>
                <div class="cart-product-card-controls">
                    <button class="remove-cart-item-btn" type="button" data-removeit=${_id}>
                        <svg class="remove-cart-item-icon" data-removeit=${_id}>
                            <use href="${icons}#icon-remove" data-removeit=${_id}></use></use>
                        </svg>
                    </button>
                </div>
            </div>
        </li>`
    ).join('') +
    `</ul>
    </div>
            <div class="order">
                <h2 class="order-title">Your Order</h2>
                <div class="order-total">
                    <p class="order-text-total">Total</p>
                    <div class="order-sum">
                        <p class="order-total-sum">
                            <span class="order-text-sum">
                            Sum:
                            </span>$${cartTotalPrice(
                            YOUR_CART
                            )}</p>
                    </div>
                </div>
                <form class="form-input">
                    <input type="email" name="user-email" id="user-email" class="mail-input" placeholder="Enter your email" pattern="[_\-a-zA-Z0-9\.\+]+@[a-zA-Z0-9](\.?[\-a-zA-Z0-9]*[a-zA-Z0-9])*" required/>
                    <button type="submit" class="form-btn">Checkout</button>
                </form>
            </div>
    </div>`;
}