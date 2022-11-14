import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryRef = document.querySelector(".gallery");

console.log(galleryItems);

function createGalleryMarkup(items) {
  return items.map((item) => `<div class="gallery__item">
  <a class="gallery__link" href="${item.original}">
    <img 
      class="gallery__image"
      src="${item.preview}"
      data-source="${item.original}"
      alt="${item.description}"
    />
  </a>
</div>`).join('');
}

createGalleryMarkup(galleryItems);

// for (let i = 0; i < array.length; i++) {
//     galleryRef.insertAdjacentHTML("beforeend", createGalleryMarkup(galleryItems));
// }

galleryRef.innerHTML = createGalleryMarkup(galleryItems);

// const addGallaryMarkup = createGallaryMarkup(galleryItems);

// galleryBlock.innerHTML = addGallaryMarkup;

// galleryBlock.addEventListener("click", onImageClick);
