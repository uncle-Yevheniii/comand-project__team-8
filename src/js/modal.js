function handleModal () {
  const refs = {
    // openModal: document.querySelector("list-item"),
    closeModalBtn: document.querySelector("[data-modal-close]"),
      modal: document.querySelector("[data-modal]"),
    
  };
console.log(refs.closeModalBtn);
    const backdrop= document.querySelector(".backdrop");
  // refs.openModal.addEventListener("click", toggleModal);
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
           document.removeEventListener("keydown", handleKey)
        }
    }
  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
  
  }
  
};
      