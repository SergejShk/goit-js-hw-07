import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const makeGalleryMurkup = (objectItems) => {
  return objectItems
    .map(({ preview, original, description }) => {
      return `<div class="gallery__item">
                <a class="gallery__link" href="${original}">
                <img
                  class="gallery__image"
                  src="${preview}"
                  data-source="${original}"
                  alt="${description}"
                />
                </a>
            </div>`;
    })
    .join("");
};

const galleryBox = document.querySelector(".gallery");

const imageMarkup = makeGalleryMurkup(galleryItems);
galleryBox.insertAdjacentHTML("beforeend", imageMarkup);

const onGetOfLargestImage = (evt) => {
  evt.preventDefault();
  const imageEl = evt.target;

  if (imageEl.nodeName !== "IMG") {
    return;
  }
  const imageAttribute = imageEl.getAttribute("data-source");
  imageEl.src = imageAttribute;

  const modal = basicLightbox.create(`
    <img src="${imageEl.src}" width="800" height="600">`);
  modal.show(() => {
    window.addEventListener("keydown", (evt) => {
      const isEscKey = evt.code === "Escape";

      if (isEscKey) {
        modal.close();
      }
    });
  });
};

galleryBox.addEventListener("click", onGetOfLargestImage);
