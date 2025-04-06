import popup from "./Popup.js";

class PopupWithForm extends popup {
  constructor(popupSelector, handleFormSubmit) {
    super({ popupSelector });
    this._modalForm = this._popupElement.querySelector(".modal__form");
    this._inputList = this._modalForm.querySelectorAll(".modal__input");
    this._handleFormSubmit = handleFormSubmit;
  }

  setEventListeners() {
    super.setEventListeners();
    this._modalForm.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this._handleFormSubmit(this._getInputValues());
    });
  }

  close() {
    this._modalForm.reset();
    super.close();
  }
}
