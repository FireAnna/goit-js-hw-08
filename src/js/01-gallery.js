// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Change code below this line

const init = function () {
  let galleryLi = '';
  galleryItems.forEach(
    item =>
      (galleryLi += `<a class="gallery__item" href="${item.original}">
        <img class="gallery__image" src="${item.preview}" alt="${item.description}" />
        </a>
        `)
  );
  return galleryLi;
};

const openModal = function (e) {
  e.preventDefault();
  const imageItem = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
  });
};

const galleryUl = document.querySelector('.gallery');

galleryUl.innerHTML = init();

galleryUl.addEventListener('click', openModal);
