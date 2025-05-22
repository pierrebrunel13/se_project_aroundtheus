import Popup from "./Popup.js";

export default class PopupWithConfirm extends Popup {
  constructor({ popupSelector }) {
    super({popupSelector});
    this._formElement = this._popupElement.querySelector(".modal__form");
    this._handleFormSubmit = this._handleFormSubmit.bind(this);
  }

  setSubmitAction(action) {
    this._handleSubmit = action;
  }

  _handleFormSubmit(evt) {
    evt.preventDefault();
    if (this._handleSubmit) {
      this._handleSubmit();
    }
  }

  setEventListeners() {
    super.setEventListeners();
    this._formElement.addEventListener('submit', this._handleFormSubmit);
  }

  removeEventListeners() {
    super.removeEventListeners();
    this._formElement.removeEventListener('submit', this._handleFormSubmit);
  }

  close() {
    super.close();
    this._formElement.reset();
  }
}
