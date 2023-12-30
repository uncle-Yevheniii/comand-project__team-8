import svgIcon from '../img/sptite.svg';
import { discountProduct } from '../API';
import { serviceProductInfo } from '../js/modalproductcard.js';
const cardDiscountProd = document.querySelector('.card-discount-prod');

import { localStorageSettings, localStorageCart } from '../local-storage.js';
import '../js/modalproductcard.js';

localStorageSettings();
localStorageCart();

//розмітка
function createMarkupDiscountProd(data) {
  return data
    .map(({ img, name, price, _id }) => {
        let cartItems = JSON.parse(localStorage.getItem('cart')) || [];
  const existingProduct = cartItems.find(item => item._id === _id);
      return `<li class="discount-prod-item slide" data-id='${_id}'>
    <div class="wrap-img-discount-prod">
      <img class="discount-img" src="${img}" alt="${name}">
    </div>
    <div class="info-discount-prod">
      <p class="text-discount-prod">${name}</p>
      <div class="price-discount-prod">
        <p class="text-discount-prod price-text-disc">$${price}</p>
        <button type="button" class="btn-icon-cart" ${existingProduct ? 'disabled' : ''}>
          <svg class="icon-cart-svg${existingProduct ? 'check' : 'cart'}" width="18" height="18">
            <use href="${svgIcon}#icon-${existingProduct ? 'check' : 'cart'}"></use>
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
      randomPictures(data);
      cardDiscountProd.innerHTML = createMarkupDiscountProd(data);
    })
    .catch(error => console.log(error.message));
}

cardDrawing();

//випадкові картинки
function randomPictures(data) {
  let oneCard = Math.floor(Math.random() * data.length);
  let twoCard = Math.floor(Math.random() * data.length);

  if (oneCard === twoCard) {
    return;
  }

  let b = data[twoCard];
  data[twoCard] = data[oneCard];
  data[oneCard] = b;
}

window.addEventListener('load', updateHeaderCartText);
cardDiscountProd.addEventListener('click', handleProductClick);

// Функція для обробки кліку на картці товару
async function handleProductClick(event) {
  const target = event.target;
  const addToCartButton = target.closest('.btn-icon-cart');

  if (addToCartButton) {
    const productCard = addToCartButton.closest('.discount-prod-item');
    const productId = productCard.dataset.id;

    // Отримуємо інформацію про товар для зберігання в localStorage
    const productInfo = await serviceProductInfo(productId);
    productInfo.quantity = 1;

    addToCart(productInfo, addToCartButton);
  }
  cardDrawing();
}

// Функція для додавання товару в кошик
function addToCart(productInfo, button) {
  let cartItems = JSON.parse(localStorage.getItem('cart')) || [];
  const existingProduct = cartItems.find(item => item._id === productInfo._id);
  if (existingProduct) {
    // Змінюємо іконку на кнопці
    const useElement = button.querySelector('.icon-cart-svgcart use');
    const svgElement = button.querySelector('.icon-cart-svg');
    if (svgElement) {
      svgElement.classList.replace(
      'icon-cart-svgcart',
      'icon-cart-svgcheck'
    );
    }
    
    useElement.setAttribute('href', `${svgIcon}#icon-check`);
    button.setAttribute('disabled', 'disabled');
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
