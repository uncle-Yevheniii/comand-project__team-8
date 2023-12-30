import { popularProdact } from '../API.js';
import { serviceProductInfo } from '../js/modalproductcard.js';
import { productsGeneretor } from '../js/products-list.js';
import cartIcon from '../img/sptite.svg';

const ul = document.querySelector('.wrapperPopularProduct');

document.addEventListener('DOMContentLoaded', onReload);
async function onReload() {
  try {
    const markup = await generatePopularCardListMarkup();
    if (markup === undefined) throw new Error();

    updateCardList(markup);
  } catch (err) {
    onError(err);
  }
}

function renderCards(arr) {
  return arr
    .map(
      ({
        name,
        img,
        category,
        size,
        popularity,
        price,
        is10PercentOff: discount,
        _id,
      }) => {
        if (category.includes('_')) {
          category = category.split('_').join(' ');
        }
        let cartItems = JSON.parse(localStorage.getItem('cart')) || [];
        const existingProduct = cartItems.find(item => item._id === _id);

        return `
  <li data-id='${_id}' class="popular__products-items">
  <div class="img-box">
    <img
      class="popular__products-img"
      src="${img}"
      alt="${name}"
    />
  </div>
  <div class="info-box">
    <h3 class="popular__products-name">${name}</h3>
    <p class="popular__products-text">
      Category:
      <span class="js-popular__products-category">${category}</span>
    </p>
    <div class="add-ifo-box">
      <p class="popular__products-text">
        Size: <span class="js-popular__products-size">${size}</span>
      </p>
      <p class="popular__products-text">
        Popularity:
        <span class="js-popular__products-popularity">${popularity}</span>
      </p>
    </div>
  </div>
  <button class="popular__products-button" ${existingProduct ? 'disabled' : ''}>
    <svg class="popular__products-svg${
      existingProduct ? 'check' : 'cart'
    }" width="12" height="12">
      <use href="${cartIcon}#icon-${existingProduct ? 'check' : 'cart'}"></use>
    </svg>
  </button>
</li>
  `;
      }
    )
    .join('');
}

export async function generatePopularCardListMarkup() {
  try {
    const popularCards = await popularProdact();
    return renderCards(popularCards);
  } catch (err) {
    onError(err);
  }
}

export function updateCardList(markup) {
  ul.innerHTML = markup;
}

function onError() {
  console.error('Error:', err);
  ul.innerHTML = '';
}
ul.addEventListener('click', handleProductClick);

async function handleProductClick(event) {
  const target = event.target;
  const addToCartButton = target.closest('.popular__products-button');

  if (addToCartButton) {
    const productCard = addToCartButton.closest('.popular__products-items');
    const productId = productCard.dataset.id;

    // Отримуємо інформацію про товар для зберігання в localStorage
    const productInfo = await serviceProductInfo(productId);
    productInfo.quantity = 1;
    addToCart(productInfo, addToCartButton);
    const popularCards = await generatePopularCardListMarkup();
    updateCardList(popularCards);
    productsGeneretor();
  }
}

// Функція для додавання товару в кошик
function addToCart(productInfo, button) {
  let cartItems = JSON.parse(localStorage.getItem('cart')) || [];
  const existingProduct = cartItems.find(item => item._id === productInfo._id);

  if (existingProduct) {
    // Змінюємо іконку на кнопці
    const useElement = button.querySelector('.popular__products-svgcart use');
    const svgElement = button.querySelector('.popular__products-svg');
    svgElement.classList.replace(
      'popular__products-svgcart',
      'popular__products-svgcheck'
    );
    useElement.setAttribute('href', `${sprite}#icon-check`);
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
