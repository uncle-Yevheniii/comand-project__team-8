import {emptyCartMarkup} from './js/empty-basket';
import { basketMarkup } from './js/basket-markup';

const cart = document.querySelector('.js-basket');
const quantity = document.querySelector('.js-cart-info')

// const USER_CART = JSON.parse(localStorage.getItem('cart'));
// const USER_CART = [];
const USER_CART = [
    {
      "_id": "640c2dd963a319ea671e383b",
      "name": "Ackee",
      "img": "https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e383b.png",
      "category": "Fresh_Produce",
      "price": 8.99,
      "size": "16 oz",
      "is10PercentOff": false,
      "popularity": 0
    },
    {
      "_id": "640c2dd963a319ea671e3864",
      "name": "Black Beans",
      "img": "https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e3864.png",
      "category": "Pantry_Items",
      "price": 1.99,
      "size": "16oz",
      "is10PercentOff": false,
      "popularity": 0
    },
    {
      "_id": "640c2dd963a319ea671e37ad",
      "name": "Black Olives",
      "img": "https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e37ad.png",
      "category": "Fresh_Produce",
      "price": 3.99,
      "size": "1 jar (16 oz)",
      "is10PercentOff": false,
      "popularity": 0
    }
  ]

function renderCart(data) {
    quantity.textContent = USER_CART.length;
    if (data.length === 0) {
        cart.innerHTML = emptyCartMarkup;
    } else {
        cart.innerHTML = basketMarkup(USER_CART);
    };
};

renderCart(USER_CART)