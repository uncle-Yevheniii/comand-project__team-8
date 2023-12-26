import axios from 'axios';
import svgIcon from '../img/sptite.svg';
import { discountProduct } from '../API';
const cardDiscountProd = document.querySelector('.card-discount-prod');

import { localStorageSettings, localStorageCart } from '../local-storage.js';
import '../js/modalproductcard.js';

localStorageSettings();
localStorageCart();

//розмітка
function createMarkupDiscountProd(data) {
  return data
    .map(({ img, name, price, _id }) => {
      return `<li class="discount-prod-item slide" data-id='${_id}'>
    <div class="wrap-img-discount-prod">
      <img class="discount-img" src="${img}" alt="${name}">
    </div>
    <div class="info-discount-prod">
      <p class="text-discount-prod">${name}</p>
      <div class="price-discount-prod">
        <p class="text-discount-prod price-text-disc">$${price}</p>
        <button type="button" class="btn-icon-cart">
          <svg class="icon-cart-svg" width="18" height="18">
            <use href="${svgIcon}#icon-cart"></use>
          </svg>
        </button>
      </div>
    </div>
    <div class="wrap-discount-svg">
      <svg class="discount-svg" width="60" height="60">
        <use href="${svgIcon}#icon-discount"></use>
      </svg>
  </div>
</li>`;
    })
    .join('');
}

//відмальовка

function cardDrawing() {
  discountProduct()
    .then(data => {
      // console.log(data.length);
      // randomPictures(data);

      cardDiscountProd.insertAdjacentHTML(
        'beforeend',
        createMarkupDiscountProd(data)
      );
    })
    .catch(error => console.log(error.message));
}

cardDrawing();

//випадкові картинки
// function randomPictures(data) {
//   let x = Math.floor(Math.random() * data.length);
//   let y = Math.floor(Math.random() * data.length);

//   console.log('x', x);
//   console.log('y', y);

//   if (x === y) {
//     return;
//   }

//   // console.log('=', data);
//   let b = data[y];
//   data[y] = data[x];
//   data[x] = b;
// }

// слайдер//////////////////

let slide = 0;
const cardHeigth = 252;
const oneSlider = 1260;
let allCards = 1260;
let timer;

autoSlider();

// const availableScreenWidth = window.screen.availWidth;
const cardDiv = document.querySelector('.slider-col');

function slider() {
  // if (availableScreenWidth <= 767.98 || availableScreenWidth >= 1440) {
  slide += cardHeigth;

  if (slide >= oneSlider) {
    slide = 0;
    clearTimeout(timer);
    // allCards += oneSlider;
    // cardDrawing();
  }

  autoSlider();
  cardDiv.style.bottom = slide + 'px';
}

function autoSlider() {
  timer = setTimeout(slider, 4000);
}

/////////////////////////////////////////
window.addEventListener('load', updateHeaderCartText);
cardDiscountProd.addEventListener('click', handleProductClick);

// Функція для обробки кліку на картці товару
function handleProductClick(event) {
  const target = event.target;
  const addToCartButton = target.closest('.btn-icon-cart');

  if (addToCartButton) {
    const productCard = addToCartButton.closest('.discount-prod-item');
    const productId = productCard.dataset.id;

    // Отримуємо інформацію про товар для зберігання в localStorage
    const productInfo = {
      id: productId,
      name: productCard.querySelector('.text-discount-prod').textContent,
      price: productCard.querySelector('.price-text-disc').textContent,
      category: productCard.dataset.category,
      img: productCard.querySelector('.discount-img').src,
      size: productCard.dataset.size,
    };
    addToCart(productInfo, addToCartButton);
  }
}

// Функція для додавання товару в кошик
function addToCart(productInfo, button) {
  let cartItems = JSON.parse(localStorage.getItem('cart')) || [];
  const existingProduct = cartItems.find(item => item.id === productInfo.id);

  if (existingProduct) {
    // Змінюємо іконку на кнопці
    const useElement = button.querySelector('.icon-cart-svg use');
    useElement.setAttribute(
      'style',
      'stroke: var(--background); fill: var(--p_color);'
    );
    useElement.setAttribute('href', `${svgIcon}#icon-check`);
  } else {
    // Якщо товар ще не доданий в кошик, додаємо його та оновлюємо localStorage
    cartItems.push(productInfo);
    localStorage.setItem('cart', JSON.stringify(cartItems));
  }
  updateHeaderCartText();
}

function updateHeaderCartText() {
  const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
  const headerSpan = document.querySelector('.js-header-span');

  if (headerSpan) {
    headerSpan.textContent = cartItems.length;
  }
}
