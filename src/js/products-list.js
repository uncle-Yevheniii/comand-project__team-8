import sprite from '../img/sptite.svg';
import { fetchData } from '../API.js';
const container = document.querySelector('.products-list');
const noProducts = document.querySelector('.products-list-none');
let limit = 6;

const defaultParams = {
  keyword: null,
  category: null,
  page: 1,
  limit: 6,
};
window.addEventListener('resize', windowChange);

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

export async function productsGeneretor() {
  if (localStorage.getItem('settings')) {
    return await render(JSON.parse(localStorage.getItem('settings')));
  }
  return await render(defaultParams);
}

async function render(params) {
  try {
    params = limitChange(params);
    const settings = JSON.parse(localStorage.getItem('settings'));
    settings.limit = params.limit;
    localStorage.setItem('settings', JSON.stringify(settings));

    const data = await fetchData(params);

    if (data.results.length === 0) {
      noProducts.classList.remove('hidden');
      container.classList.add('hidden');
    } else {
      if (container.classList.contains('hidden')) {
        noProducts.classList.add('hidden');
        container.classList.remove('hidden');
      }
      container.innerHTML = createCardMarkup(data.results);
    }
  } catch (error) {
    console.log(error.message);
  }
}
function windowChange() {
  const settings = JSON.parse(localStorage.getItem('settings'));

  if (
    (window.innerWidth < 768 && settings.limit === 6) ||
    (window.innerWidth >= 768 &&
      window.innerWidth < 1440 &&
      settings.limit === 8) ||
    (window.innerWidth >= 1440 && settings.limit === 9)
  ) {
    return;
  } else {
    console.log(`windowChange ${limit}`);
    productsGeneretor();
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
                <use href="${sprite}#icon-cart"></use>
            </svg></button>
    </div>
    ${
      discount
        ? `<svg class="productlist-dicount" width="60" height="60">
      <use href="${sprite}#icon-discount"></use>
    </svg>`
        : ``
    }
</div>
  `;
      }
    )
    .join('');
}
