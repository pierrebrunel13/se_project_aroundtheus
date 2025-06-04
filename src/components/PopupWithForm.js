import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor(popupSelector, handleFormSubmit) {
    super({ popupSelector });
    this._formElement = this._popupElement.querySelector(".modal__form");
    this._inputList = this._formElement.querySelectorAll(".modal__input");
    this._handleFormSubmit = handleFormSubmit;

    this._submitButton = this._formElement.querySelector(".modal__button");
    this._initialButtonText = this._submitButton.textContent;
  }

  _getInputValues() {
    const formValues = {};
    this._inputList.forEach((input) => {
      formValues[input.name] = input.value;
    });
    return formValues;
  }

  setEventListeners() {
    super.setEventListeners();
    this._formElement.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this._handleFormSubmit(this._getInputValues());
    });
  }

  // close() {
  //   super.close();
  // }

  setLoadingState(isLoading, buttonText = "Saving...") {
    if (this._submitButton) {
      this._submitButton.disabled = isLoading;
      this._submitButton.textContent = isLoading ? buttonText : this._initialButtonText;
    }
  }
}
