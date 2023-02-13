// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const gridCardsContainer = document.querySelector('.gallery');
const gridCards = createGridCardsGallery(galleryItems);

gridCardsContainer.insertAdjacentHTML('afterbegin', gridCards);
// gridCardsContainer.addEventListener("click", gridCardsContainerClick);

function createGridCardsGallery(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<li class="gallery__item">
      <a class="gallery__link" href="${original}">
      <img
        class="gallery__image"
        src="${preview}"
        alt="${description}"
      />
    </a>
    </li>`;
    })
    .join('');
}

const lightbox = new SimpleLightbox('.gallery__link', {
  captionsData: 'alt',
  captionDelay: 250,
});
