export default class Popup {
  constructor({ popupSelector }) {
    this._popupElement = document.querySelector(popupSelector);
    this._handleEscClose = this._handleEscClose.bind(this);
  }

  open() {
    //open popup
    this._popupElement.classList.add("modal_opened");
    document.addEventListener("keyup", this._handleEscClose);
  }

  close() {
    //close popup

    this._popupElement.classList.remove("modal_opened");
    document.removeEventListener("keyup", this._handleEscClose);
  }

  _handleEscClose(evt) {
    //listen for esc button
    if (evt.key === "Escape") {
      this.close();
    }
  }

  setEventListeners() {
     
    //set event listeners
    this._popupElement.addEventListener("mousedown", (evt) => {
      if (evt.target.classList.contains("modal") || evt.target.classList.contains("modal__close")) {
        this.close();
      }
    });
  
  }
}
