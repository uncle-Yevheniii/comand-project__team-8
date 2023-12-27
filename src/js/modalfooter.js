(() => {
  const refs = {
    // openModal: document.querySelector(".cart-form-btn"),
     openModal: document.querySelector(".footer-form"),
    closeModalBtn: document.querySelector("[data-modal-close]"),
    modal: document.querySelector("[data-modal]"),
  };

  const backdrop = document.querySelector(".backdrop");

  refs.openModal.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the default form submission behavior
        refs.openModal.reset();
    toggleModal();

  });

  refs.closeModalBtn.addEventListener("click", toggleModal);
  backdrop.addEventListener("click", handleBackdrop);

  function handleBackdrop(event) {
    if (event.target !== backdrop) {
      return;
    }
    toggleModal();
  }

  document.addEventListener("keydown", handleKey);

  function handleKey(event) {
    if (event.code === "Escape") {
      toggleModal();
      document.removeEventListener("keydown", handleKey);
    }
  }

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
    console.log("!!!!");
  }
})();
