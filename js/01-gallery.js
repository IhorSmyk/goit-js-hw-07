import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryRef = document.querySelector(".gallery");

function createGalleryMarkup(items) {
    return items.map((el) => `<div class="gallery__item">
  <a class="gallery__link" href="${el.original}">
    <img 
      class="gallery__image"
      src="${el.preview}"
      data-source="${el.original}"
      alt="${el.description}"
    />
  </a>
</div>`).join('');
}

function onImageClick(e) {
    if (e.target.nodeName !== "IMG") {
        return;
    }

    e.preventDefault();

    const instance = basicLightbox.create(`
    <img src="${e.target.dataset.source}" width="800" height="600">
    `);

    instance.show();

    galleryRef.addEventListener("keydown", e => {
        if (e.code === "Escape") {
            instance.close();
        }
    });
}

galleryRef.innerHTML = createGalleryMarkup(galleryItems);
galleryRef.addEventListener("click", onImageClick);
