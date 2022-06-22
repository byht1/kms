import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const conteiner = document.querySelector('.gallery-box');

conteiner.addEventListener('click', () => {
  event.preventDefault();
});

const beautifulGallery = new SimpleLightbox('.gallery-box a');
beautifulGallery.on('show.simplelightbox', () => {
  beautifulGallery.defaultOptions.captionDelay = 250;
});
