import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super({ popupSelector });
    this._image = this._popupElement.querySelector(".modal__image");
    this._caption = this._popupElement.querySelector(".modal__caption");
  }

open( name, link) {
  
  console.log("Image open:", { name, link });
    this._image.src = link;
    this._image.alt = name;
    this._caption.textContent = name;
    super.open();
  }

  
}
