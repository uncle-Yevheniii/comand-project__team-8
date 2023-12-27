import axios from 'axios';
import cartIcon from '../img/sptite.svg';
// import { handleModal } from "./modal";
const ul = document.querySelector('.wrapperPopularProduct');
console.log(ul);
const body = document.querySelector('body');
ul.addEventListener('click', handleCardClick);

const list = document.querySelector('.products-list');
console.log(list);
list.addEventListener('click', handleCardProductClick);

async function handleCardProductClick(event) {
  list.removeEventListener('click', handleCardProductClick);

  const product = event.target.closest('.productlist-card');

  if (product === null || event.target.closest('.productlist-card-btn')) {
    list.addEventListener('click', handleCardProductClick);
    return;
  }
  console.log(product);
  // delete later for button

  const id = product.dataset.id;

  const info = await serviceProductInfo(id);
  console.log(info);

  body.insertAdjacentHTML('beforeend', createMarkup(info));
   const button = document.querySelector('.modal-wimdow-add-to-cart-btn');
  let cartItems = JSON.parse(localStorage.getItem('cart')) || [];
  const existingProduct = cartItems.find(item => item._id === info._id);

  if (existingProduct) {
    // Змінюємо іконку на кнопці

    button.style.background = "#6d8434";
    button.textContent="Added to";
  } 
  handleProductModal();
}

async function handleCardClick(event) {
  ul.removeEventListener('click', handleCardClick);
  const product = event.target.closest('li');
  if (product === null || event.target.closest('.popular__products-button')) {
    ul.addEventListener('click', handleCardClick);
    return;
  }
  // delete later for button
  // delete if click is not li
  const id = product.dataset.id;

  const info = await serviceProductInfo(id);
  console.log(info);

  body.insertAdjacentHTML('beforeend', createMarkup(info));
    const button = document.querySelector('.modal-wimdow-add-to-cart-btn');
    
  let cartItems = JSON.parse(localStorage.getItem('cart')) || [];
  const existingProduct = cartItems.find(item => item._id === info._id);

  if (existingProduct) {
    // Змінюємо іконку на кнопці

    button.style.background = "#6d8434";
    button.textContent="Added to";
  } 
  handleProductModal();
}

export async function serviceProductInfo(id) {
  const BASE_URL = 'https://food-boutique.b.goit.study/api/products/';

  return axios
    .get(`${BASE_URL}${id}`)
    .then(resp => {
      return resp.data;
    })
    .catch(error => {
      throw new Error(error);
    });
}

function createMarkup(info) {
  let category_;
  const { _id, name, category, size, popularity, desc, price, img } = info;
          if (category.includes('_')) {
          category_ = category.split('_').join(' ');
        }
  return `
    <div class="backdrop" data-modal>
  <div class="modal-container modal-product" data-id="${_id}" data-modal">
    <svg
      class="modal-product-close-icon"
      width="22"
      height="22"
      data-modal-close
    >
      <use href="${cartIcon}#icon-close"></use>
    </svg>
    <div class="modal-product-img-text">
      <div class="modal-product-container-img">
        <img
          class="modal-product-img"
          src="${img}"
          alt="${name}"
          width="160"
          height="160"
        />
      </div>
      <div class="modal-product-text">
        <p class="modal-product modal-product-name">${name}</p>
        <div class="modal-container-descs">
          <p class="modal-product modal-product-desc">
            Category:
            <span class="modal-product-desc modal-product-desc-value"
              >${category_}</span
            >
          </p>

          <p class="modal-product modal-product-desc">
            Size:
            <span class="modal-product-desc modal-product-desc-value"
              >${size}</span
            >
          </p>

          <p class="modal-product modal-product-desc">
            Popularity:
            <span class="modal-product-desc modal-product-desc-value">${popularity}</span>
          </p>
        </div>

        <p class="modal-product-description" style="overflow-y:auto; max-height: 200px">
         ${desc}

        </p>
      </div>
    </div>

    <div class="container-cost-button">
      <p class="modal-product-cost">$${price}</p>
      <button class="modal-wimdow-add-to-cart-btn">
        Add to
        <svg class="modal-product-addtocart" width="18" height="18">
          <use href="${cartIcon}#icon-cart"></use>
        </svg>
      </button>
    </div>
  </div>
</div>
    
    `;
}

// function handleProductModal() {
//   const closeModalBtn = document.querySelector('[data-modal-close]');
//   const modal = document.querySelector('[data-modal]');
//   const backdrop = document.querySelector('.backdrop');
//    function toggleModal() {
//       console.log('!!!!!!!');
//      modal.remove();
//       //  modal.parentElement.removeChild(modal);
//       // document.removeEventListener('keydown', handleKey);
//       closeModalBtn.removeEventListener('click', toggleModal);
//     }
//   closeModalBtn.addEventListener('click', toggleModal);
//   backdrop.addEventListener('click', handleBackdrop);
//   function handleBackdrop(event) {
//     if (event.target !== backdrop) {
//       return;
//     }
//     toggleModal();
//     backdrop.removeEventListener('click', handleBackdrop);
//   }
//   document.addEventListener('keydown', handleKey);

//   function handleKey(event) {
//     if (event.code === 'Escape') {
//       toggleModal();
//             document.removeEventListener('keydown', handleKey);
//     }

//     ul.addEventListener('click', handleCardClick);
//     list.addEventListener('click', handleCardProductClick);
//     // list.addEventListener("click", handleCardPopularClick);
//   }
// }

// function showLoader(span) {
//   span.style.visibility = 'visible';
// }

// function hideLoader(span) {
//   span.style.display = 'none';
// }

function handleProductModal() {
  const closeModalBtn = document.querySelector('[data-modal-close]');
  const backdrop = document.querySelector('.backdrop');
  const modal = document.querySelector('[data-modal]');
  modal.addEventListener("click", handleProductClick);
  function toggleModal() {
    const modal = document.querySelector('[data-modal]');
    if (modal) {
      modal.remove();
      closeModalBtn.removeEventListener('click', toggleModal);
      document.removeEventListener('keydown', handleKey);
      backdrop.removeEventListener('click', handleBackdrop);
    }
  }

  function handleBackdrop(event) {
    if (event.target !== backdrop) {
      return;
    }
    toggleModal();
    backdrop.removeEventListener('click', handleBackdrop);
  }

  function handleKey(event) {
    if (event.code === 'Escape') {
      toggleModal();
      document.removeEventListener('keydown', handleKey);
    }
  }
  ul.addEventListener('click', handleCardClick);
  list.addEventListener('click', handleCardProductClick);

  closeModalBtn.addEventListener('click', toggleModal);
  backdrop.addEventListener('click', handleBackdrop);
  document.addEventListener('keydown', handleKey);

  // Prevent attaching multiple listeners to the same modal
  if (!document.querySelector('[data-modal]')) {
    body.insertAdjacentHTML('beforeend', createMarkup(info));
  }
}




async function handleProductClick(event) {
  const target = event.target;
  const addToCartButton = target.closest('.modal-wimdow-add-to-cart-btn');
console.log(addToCartButton);
  // console.dir(document.querySelector('.productlist-card'));
  if (addToCartButton) {
    const productCard = addToCartButton.closest('.modal-container');
    console.log(productCard);
    const productId = productCard.dataset.id;
console.log(productId);
    // Отримуємо інформацію про товар для зберігання в localStorage
    const productInfo = await serviceProductInfo(productId);
    productInfo.quantity = 1;
    addToCart(productInfo, addToCartButton);
  }
}

// Функція для додавання товару в кошик
function addToCart(productInfo, button) {
  let cartItems = JSON.parse(localStorage.getItem('cart')) || [];
  const existingProduct = cartItems.find(item => item._id === productInfo._id);

  if (existingProduct) {
    // Змінюємо іконку на кнопці

    button.style.background = "#6d8434";
    button.textContent="Added to";
  } else {
    // Якщо товар ще не доданий в кошик, додаємо його та оновлюємо localStorage
    cartItems.push(productInfo);
    localStorage.setItem('cart', JSON.stringify(cartItems));
        button.style.background = "#6d8434";
    button.textContent="Added to";
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
