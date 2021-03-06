import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const createImageMarkup = (objectItems) => {
  return objectItems
    .map(({ preview, original, description }) => {
      return `
        <a class="gallery__item" href="${original}">
            <img class="gallery__image" 
                src="${preview}" 
                alt="${description}" />
        </a>
        `;
    })
    .join("");
};

const galleryListRef = document.querySelector(".gallery");
const imageMarkup = createImageMarkup(galleryItems);

galleryListRef.insertAdjacentHTML("beforeend", imageMarkup);

new SimpleLightbox(".gallery a", { captionsData: "alt", captionDelay: "250" });
