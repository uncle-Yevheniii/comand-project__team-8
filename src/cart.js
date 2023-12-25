import { emptyCartMarkup } from './js/empty-basket';
import { cartDeleteAll } from './js/cart-delete-all';
import { basketMarkup } from './js/basket-markup';
import { changeQuantity } from './js/cart-quantity';
import { cartRemoveItem } from './js/cart-remove-item';
import { cartProductQuantity } from './js/cart-product-quantity';

const cart = document.querySelector('.js-basket');

const data = [
    {
      "_id": "640c2dd963a319ea671e383b",
      "name": "Ackee",
      "img": "https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e383b.png",
      "category": "Fresh_Produce",
      "price": 8.99,
      "size": "16 oz",
      "is10PercentOff": false,
        "popularity": 0,
      "quantity": 1
    },
    {
      "_id": "640c2dd963a319ea671e3864",
      "name": "Black Beans",
      "img": "https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e3864.png",
      "category": "Pantry_Items",
      "price": 1.99,
      "size": "16oz",
      "is10PercentOff": false,
      "popularity": 0,
      "quantity": 1
    },
    {
      "_id": "640c2dd963a319ea671e37ad",
      "name": "Black Olives",
      "img": "https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e37ad.png",
      "category": "Fresh_Produce",
      "price": 3.99,
      "size": "1 jar (16 oz)",
      "is10PercentOff": false,
      "popularity": 0,
      "quantity": 1
    },
    {
      "_id": "640c2dd963a319ea671e37a",
      "name": "Black Olives",
      "img": "https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e37ad.png",
      "category": "Fresh_Produce",
      "price": 3.99,
      "size": "1 jar (16 oz)",
      "is10PercentOff": false,
      "popularity": 0,
      "quantity": 1
    }
]
  
localStorage.setItem('cart',JSON.stringify(data)) 

const USER_CART = JSON.parse(localStorage.getItem('cart'))|| [];
// const USER_CART = [];

export function renderCart(data) {
    changeQuantity();
    if (data.length === 0) {
        cart.innerHTML = emptyCartMarkup;
    } else {
        cart.innerHTML = basketMarkup(data);
    };
    cartProductQuantity(data);
    cartDeleteAll();
    cartRemoveItem(data);
};

renderCart(USER_CART);