(() => {
  const refs = {
    // openModalBtn: document.querySelector("[data-modal-open]"),
    closeModalBtn: document.querySelector("[data-modal-close]"),
      modal: document.querySelector("[data-modal]"),
    
  };
    const backdrop= document.querySelector(".backdrop");
//   refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);
    backdrop.addEventListener("click", toggleModal);
    document.addEventListener("keydown", event => {
        if (event.code == "Escape") {
            toggleModal();
}
});
  function toggleModal() {
    refs.modal.classList.add("is-hidden");
  }
})();
console.log("werty");