import cartIcon from '../img/sptite.svg';
import axios from 'axios';
const container = document.querySelector('.products-list');

async function fetchAPI() {
  return await axios
    .get('https://food-boutique.b.goit.study/api/products', {
      params: {
        perPage: 9,
        page: 7,
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
    .map(
      ({
        name,
        img,
        category,
        size,
        popularity,
        price,
        is10PercentOff: discount,
      }) => {
        if (category.includes('_')) {
          const rightCategory = category.split('');
          while (rightCategory.includes('_')) {
            rightCategory.splice(rightCategory.indexOf('_'), 1, ' ');
          }
          category = rightCategory.join('');
        }

        return `
    <div class="productlist-card">
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
        <button type="button" class="productlist-card-btn"><svg class="productlist-card-icon-cart" width="18" height="18">
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
