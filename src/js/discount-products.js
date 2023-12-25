import axios from 'axios';
import svgIcon from '../img/sptite.svg';
import { discountProduct } from '../API';
const cardDiscountProd = document.querySelector('.card-discount-prod');

//розмітка
function createMarkupDiscountProd(data) {
  return data
    .map(({ _id, img, name, price }) => {
      return `<li class="discount-prod-item slide">
    <div class="wrap-img-discount-prod">
      <img class="discount-img" src="${img}" alt="${name}">
    </div>
    <div class="info-discount-prod">
      <p class="text-discount-prod">${name}</p>
      <div class="price-discount-prod">
        <p class="text-discount-prod">$${price}</p>
        <button class="btn-icon-cart">
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

discountProduct()
  .then(data => {
    console.log(data.length);

    cardDiscountProd.insertAdjacentHTML(
      'beforeend',
      createMarkupDiscountProd(data)
    );
  })
  .catch(error => console.log(error.message));

// слайдер//////////////////

let slide = 0;
const cardHeigth = 252;
const allCards = 1260;
let timer;

autoSlider();

// const availableScreenWidth = window.screen.availWidth;
const cardDiv = document.querySelector('.slider-col');

function slider() {
  // if (availableScreenWidth <= 767.98 || availableScreenWidth >= 1440) {
  slide += cardHeigth;

  if (slide >= allCards) {
    slide = 0;
    clearTimeout(timer);
  }

  autoSlider();
  cardDiv.style.bottom = slide + 'px';
}

function autoSlider() {
  timer = setTimeout(slider, 4000);
}
