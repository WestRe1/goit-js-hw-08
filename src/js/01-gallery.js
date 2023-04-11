// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

console.log(galleryItems);
const gallery = document.querySelector('.gallery');
(function () {
    const marcup = galleryItems.map(({preview, original, description }) => `
    <li class="gallery__item">
    <a class="gallery__link" target="_self" href="${original}">
    <img
      class="gallery__image js-target"
      src="${preview}"
      alt="${description}"
    />
  </a>
</li>`).join('');
    gallery.insertAdjacentHTML('beforeend', marcup)
})();




let galleryLightBox = new SimpleLightbox('.gallery a', {
   
    captionData: 'alt',
    captionDelay: 250,
});
