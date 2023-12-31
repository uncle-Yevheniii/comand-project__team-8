import { galleryItems } from "./gallery-items.js";

const gallery = document.querySelector(`.gallery`);
const markup = createMarcup(galleryItems);
function createMarcup(cards) {
  return cards
    .map(
      ({ preview, original, description }) =>
        ` <li class="gallery__item">
<a class="gallery__link" href="${original}">
  <img
    class="gallery__image"
    src="${preview}"
    data-source="${original}"
    alt="${description}"
  />
</a>
</li>`
    )
    .join("");
}
gallery.insertAdjacentHTML("beforeend", markup);

gallery.addEventListener(`click`, showImg);
function showImg(evt) {
  evt.preventDefault();
  if (evt.target.nodeName !== "IMG") {
    return;
  } else {
    const pas = evt.target.dataset.source;
    const instance = basicLightbox.create(`
    <img src="${pas}" width="800" height="600">
`);
    instance.show();
    window.addEventListener(`keydown`, closWindow);
    function closWindow(evt) {
      if (evt.code === `Escape`) {
        instance.close();
        window.removeEventListener("keydown", closWindow);
      }
    }
  }
}
