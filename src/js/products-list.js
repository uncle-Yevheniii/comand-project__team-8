import cartIcon from '../img/sptite.svg';
import { fetchData } from '../API.js';
const container = document.querySelector('.products-list');

const defaultParams = {
  keyword: null,
  category: null,
  page: 1,
  limit: 6,
};

productsGeneretor();
window.onresize = productsGeneretor;

function limitChange(obj) {
  if (window.innerWidth < 768) {
    obj.limit = 6;
  } else if (window.innerWidth >= 768 && window.innerWidth < 1440) {
    obj.limit = 8;
  } else {
    obj.limit = 9;
  }
  return obj;
}

async function productsGeneretor() {
  if (localStorage.getItem('settings')) {
    return await render(JSON.parse(localStorage.getItem('settings')));
  }
  return await render(defaultParams);
}

async function render(params) {
  try {
    limitChange(params);
    const data = await fetchData(params);
    container.innerHTML = createCardMarkup(data.results);
  } catch (error) {
    console.log(error.message);
  }
}

function createCardMarkup(arr) {
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

        return `
    <div class="productlist-card" data-id="${_id}">
    <div class="productlist-card-img-wrapper">
        <img src="${img}" alt="${name}" class="productlist-card-img" width="140">
    </div>
    <h3 class="productlist-card-header">${name}</h3>
    <div class="productlist-card-text-wrapper">
        <p class="productlist-card-text">
          Category: <span class="productlist-card-text-span">${category}</span>
        </p>
        <p class="productlist-card-text">
          Size: <span class="productlist-card-text-span">${size}</span>
        </p>
        <p class="productlist-card-text">
          Popularity: <span class="productlist-card-text-span">${popularity}</span>
        </p>
    </div>

    <div class="productlist-card-bottom">
        <span class="productlist-card-price">$${price}</span>
        <button type="button" class="productlist-card-btn">
            <svg class="productlist-card-icon-cart" width="18" height="18">
                <use href="${cartIcon}#icon-cart"></use>
            </svg></button>
    </div>
    ${
      discount
        ? `<svg class="productlist-dicount" width="60" height="60">
      <use href="../img/sptite.svg#icon-discount"></use>
    </svg>`
        : ``
    }
</div>
  `;
      }
    )
    .join('');
}
