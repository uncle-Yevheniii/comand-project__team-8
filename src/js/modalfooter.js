import img from '../img/subscribing-modal@1x.png'
import img2x from '../img/subscribing-modal@2x.png'
import cartIcon from '../img/sptite.svg';

export function showModalEmail() {
  const body = document.querySelector('body');

  body.insertAdjacentHTML('beforeend', createMarkupEmail());
  handleModal();
}
export function showModalSubscr() {
  const body = document.querySelector('body');

  body.insertAdjacentHTML('beforeend', createMarkupSubscr());
  handleModal();
}

// showModal()
// function showModal() {
//     const body = document.querySelector('body');

//     /*перевірка чи такий емейл уже був уведений*/

//     if (true) {
//         body.insertAdjacentHTML('beforeend', createMarkupEmail());
//         handleModal();
//     }
//     // else {
//     //     body.insertAdjacentHTML('beforeend', createMarkupSubscr());
//     //           handleModal();}
// //       if(true) {
// //         body.insertAdjacentHTML('beforeend', createMarkupSubscr());
// //               handleModal();
// // }
// }
function createMarkupEmail() {
  return `
    <div class="backdrop" data-modal>
  <div class="modal-container email-container modal-product" data-modal>
    <svg
      class="modal-product-close-icon"
      width="22"
      height="22"
      data-modal-close
    >
      <use href="${cartIcon}#icon-close"></use>
    </svg>
    <div class="modal-wrapper-title">
      <p class="modal-subscr-title">
        This <span class="modal-subscr-title-accent">email address</span> has
        already been entered
      </p>
    </div>
    <div class="modal-wrapper-text">
      <p class="modal-subcr-text">
        You have already subscribed to our new products. Watch for offers at the
        mailing address.
      </p>
    </div>
  </div>
</div>

    
    `;
}

function createMarkupSubscr() {
  return `
   <div class="backdrop back-drop-sub" data-modal>
  <div class="modal-container subscribing-container modal-product" data-modal>
    <svg
      class="modal-product-close-icon sub-icon"
      width="22"
      height="22"
      data-modal-close
    >
      <use href="${cartIcon}#icon-close"></use>
    </svg>
    <div class="modal-wrapper-title">
      <p class="modal-subscr-title">
        Thanks for subscribing for
        <span class="modal-subscr-title-accent">new</span> products
      </p>
    </div>
    <div class="modal-wrapper-text">
      <p class="modal-subcr-text">
        We promise you organic and high-quality<br />
        products that will meet your expectations.<br />
        Please stay with us and we promise you many pleasant surprises.
      </p>
    </div>

    <img
      class="modal-subcr-img"
      srcset="
        ${img} 1x,
        ${img2x} 2x
      "
      src="${img}"
      width="335"
      height="144"
      alt="Vegetables"
    />
  </div>
</div>
    
    `;
}
function handleModal() {
  const closeModalBtn = document.querySelector('[data-modal-close]');
  const backdrop = document.querySelector('.backdrop');
  //   const modal = document.querySelector('[data-modal]');
  //   modal.addEventListener('click', handleProductClick);
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
  //   ul.addEventListener('click', handleCardClick);
  //   list.addEventListener('click', handleCardProductClick);

  closeModalBtn.addEventListener('click', toggleModal);
  backdrop.addEventListener('click', handleBackdrop);
  document.addEventListener('keydown', handleKey);

  // Prevent attaching multiple listeners to the same modal
  if (!document.querySelector('[data-modal]')) {
    body.insertAdjacentHTML('beforeend', createMarkup(info));
  }
}
