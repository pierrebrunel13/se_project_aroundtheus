import Popup from "./Popup.js";

export default class PopupWithConfirm extends Popup {
  constructor({ popupSelector }) {
    super({ popupSelector });
    this._formElement = this._popupElement.querySelector(".modal__form");
     this._submitButton = this._formElement.querySelector(".modal__button")
    this._handleFormSubmit = this._handleFormSubmit.bind(this);
  }

  setSubmitAction(action) {
    console.log('Setting submit action:', action); 
    this._handleSubmit = action;
  }

  _handleFormSubmit(evt) {
    evt.preventDefault();
    if (this._handleSubmit) {
        console.log('Submit handler exists'); 
      this._handleSubmit();
    }
  }

  setEventListeners() {
    super.setEventListeners();
    this._formElement.addEventListener("submit", this._handleFormSubmit);
  }

  removeEventListeners() {
    super.removeEventListeners();
    this._formElement.removeEventListener("submit", this._handleFormSubmit);
  }

  

  
  // testing 
   setLoadingState(isLoading, buttonText = 'Yes') {
    if (isLoading) {
      this._originalButtonText = this._submitButton.textContent;
      this._submitButton.textContent = 'Deleting...';
    } else {
      this._submitButton.textContent = buttonText || this._originalButtonText;
    }
    this._submitButton.disabled = isLoading;
  }
}
