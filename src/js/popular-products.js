import { popularProdact } from '../API.js';
import { popular_products_ul } from '../refs';
import cartIcon from '../img/sptite.svg';

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

function renderCards({ category, img, name, popularity, size, _id }) {
  return `
  <li data-id='${_id}' class="popular__products-items  ">
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
  <button class="popular__products-button">
    <svg class="popular__products-svg" width="12" height="12">
      <use href="${cartIcon}#icon-cart"></use>
    </svg>
  </button>
</li>
  `;
}

async function generatePopularCardListMarkup() {
  try {
    const popularCards = await popularProdact();
    // console.log(popularCards);
    return popularCards.reduce(
      (markup, productCard) => markup + renderCards(productCard),
      ''
    );
  } catch (err) {
    onError(err);
  }
}

function updateCardList(markup) {
  popular_products_ul.insertAdjacentHTML('beforeend', markup);
}

function onError() {
  console.error('Error:', err);
  popular_products_ul.innerHTML = '';
}
