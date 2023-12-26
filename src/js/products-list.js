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

window.addEventListener('load', updateHeaderCartText);
container.addEventListener('click', handleProductClick);

// Функція для обробки кліку на картці товару
function handleProductClick(event) {
  const target = event.target;
  const addToCartButton = target.closest('.productlist-card-btn');

  if (addToCartButton) {
    const productCard = addToCartButton.closest('.productlist-card');
    const productId = productCard.dataset.id;

    // Отримуємо інформацію про товар для зберігання в localStorage
    const productInfo = {
      id: productId,
      name: productCard.querySelector('.productlist-card-header').textContent,
      price: productCard.querySelector('.productlist-card-price').textContent,
      category: productCard.dataset.category,
      img: productCard.querySelector('.productlist-card-img').src,
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
    const useElement = button.querySelector('.productlist-card-icon-cart use');
    useElement.setAttribute(
      'style',
      'stroke: var(--background); fill: var(--p_color);'
    );
    useElement.setAttribute('href', `${sprite}#icon-check`);
  } else {
    // Якщо товар ще не доданий в кошик, додаємо його та оновлюємо localStorage
    cartItems.push(productInfo);
    localStorage.setItem('cart', JSON.stringify(cartItems));
    console.log('Товар доданий в кошик!');
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
