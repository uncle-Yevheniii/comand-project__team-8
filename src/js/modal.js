(() => {
  const refs = {
    // openModalBtn: document.querySelector("[data-modal-open]"),
    closeModalBtn: document.querySelector("[data-modal-close]"),
      modal: document.querySelector("[data-modal]"),
    
  };
    const backdrop= document.querySelector(".backdrop");
//   refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);
  backdrop.addEventListener("click", handleBackdrop);
  function handleBackdrop(event) {
    if (event.target === backdrop) {
      toggleModal();
    }
  }

    document.addEventListener("keydown", handleKey);

      function handleKey(event) {
        if (event.code === "Escape") {
          toggleModal();
           document.removeEventListener("keydown", handleKey)
        }
    }
  function toggleModal() {
    refs.modal.classList.add("is-hidden");
  }
  
})();
     