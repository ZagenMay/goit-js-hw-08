import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { galleryItems } from './gallery-items';

const galleryBox = document.querySelector('.gallery');

const markup = galleryItems
  .map(
    ({ preview, original, description }) => `
<div class="gallery__item">
<a class="gallery__link" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>
</div>
`,
  )
  .join('');
galleryBox.innerHTML = markup;

const lightBox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
