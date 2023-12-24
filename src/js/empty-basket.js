import basket from '../img/yellow-shopping-basket@1x.png';
import basket2x from '../img/yellow-shopping-basket@2x.png';

export const emptyCartMarkup = `
    <picture class="empty-basket">
        <source srcset="${basket} 1x, ${basket2x} 2x" />
        <img src="${basket}" alt="basket" class="basket-empty-img"/>
    </picture>
    <h3 class="empty-basket-title">
        Your basket is
        <span class="empty-basket-span">empty...</span>
    </h3>
    <p class="empty-basket-text">
        Go to the main page to select your favorite products and add them to the cart.
    </p>
`;