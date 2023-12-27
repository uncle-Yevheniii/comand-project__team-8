refs.footerSubmitBtnEl.addEventListener('click', onSubmit);

refs.footerSubmitBtnEl.disabled = true;


// Validation form
validateInput(refs.footerInputEl, refs.footerSubmitBtnEl);

// Submit
async function onSubmit(e) {
  const getProduct = new GetProduct();
  e.preventDefault();
  const userEmailData = {
    email: refs.footerInputEl.value,
  };

  try {
    const data = await getProduct.subscription(userEmailData);
    refs.footerSubmitBtnEl.disabled = false;

    const modalMarkup = renderDataMarkup(data.message);
    appendMarkup(refs.footerModalEl, modalMarkup);

    toggleModal();
    refs.footerFormEl.reset();
  } catch (error) {
    console.error(error);
  }
}

// Click on modal button
function onClick() {
  toggleModal();
  const mesEl = document.querySelector('.footer-modal-message');
  refs.footerSubmitBtnEl.disabled = true;
  mesEl.remove();
}
refs.footerModalBtnCloseEl.addEventListener('click', onClick);
