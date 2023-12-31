import { galleryItems } from './gallery-items.js';
// Change code below this line
const cardContainer = document.querySelector(`.gallery`);
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
    alt="${description}"/>
</a>
</li>`
    )
    .join("");
}
cardContainer.insertAdjacentHTML("beforeend", markup);

let gallery = new SimpleLightbox('.gallery a', {
  captionsData: "alt",
  captionDelay: 250,

});
gallery.on('change.simplelightbox', function () {
 alert(`Я умничка!!😍`)
});