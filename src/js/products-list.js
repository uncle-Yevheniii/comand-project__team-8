import cartIcon from '../img/sptite.svg#icon-cart';
import axios from 'axios';
const container = document.querySelector('.products-list');

async function fetchAPI() {
  return await axios
    .get('https://food-boutique.b.goit.study/api/products', {
      params: {
        perPage: 1,
        page: 1,
      },
    })
    .then(result => {
      return result.data;
    });
}
async function lala() {
  const data = await fetchAPI();
  container.insertAdjacentHTML('beforeend', createCardMarkUp(data.results));
}

lala();
function createCardMarkUp(arr) {
  // filter надо
  return arr
    .map(({ name, img, category, size, popularity, price }) => {
      if (category.includes('_')) {
        const rightCategory = category.split('');
        rightCategory.splice(category.indexOf('_'), 1, ' ');
        category = rightCategory.join('');
      }

      return `
    <div class="productlist-card">
    <div class="productlist-card-img-wrapper">
        <img src="${img}" alt="${name}" class="productlist-card-img" width="140">
    </div>
    <p class="productlist-card-header">${name}</p>
    <p class="productlist-card-text">
        <span class="productlist-card-text-headers">Category: </span>${category}
        <span class="productlist-card-text-headers">Size: </span>${size}
        <span class="productlist-card-text-headers">Popularity: </span>${popularity}
    </p>
    <div class="productlist-card-bottom">
        <span class="productlist-card-price">$${price}</span>
        <button type="button" class="productlist-card-btn"><svg class="productlist-card-icon-cart" width="18" height="18">
                <use href="../img/sptite.svg#icon-cart"></use>
            </svg></button>
    </div>
</div>
  `;
    })
    .join('');
}
