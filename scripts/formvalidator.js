class FormValidator {
  constructor(settings, formEl) {
    this._inputSelector = settings.inputSelector;
    this._submitButtonSelector = settings.submitButtonSelector;
    this._inactiveButtonClass = settings.inactiveButtonClass;
    this._inputErrorClass = settings.inputErrorClass;
    this._errorClass = settings.errorClass;

    this._form = formEl;
  }

  showInputError(inputEl) {
    const errorMessageEl = this._form.querySelector(`#${inputEl.id}-error`);
    inputEl.classList.add(this._inputErrorClass);
    errorMessageEl.textContent = inputEl.validationMessage;
    errorMessageEl.classList.add(this._errorClass);
  }

  toggleButtonState() {
    if (hasInvalidInput(inputList)) {
      submitButton.classList.add(inactiveButtonClass);
      submitButton.disabled = true;
    } else {
      submitButton.classList.remove(inactiveButtonClass);
      submitButton.disabled = false;
    }
  }

  hasInvalidInput() {return inputList.some((inputEl) => {
    return !inputEl.validity.valid;
  })}

  _checkInputValidity() {if (!inputEl.validity.valid) {
    showInputError(this._form, inputEl, options);
  } else {
    hideInputError(this._form, inputEl, options);
  }}

  _setEventListeners() {
    const submitButton = this._form.querySelector(options.this._submitButtonSelector);
    toggleButtonState(inputList, submitButton, options);
    this._inputList.forEach((inputEl) => {
      this._inputEl.addEventListener("input", (e) => {
        checkInputValidity(this._form, inputEl, options);
        toggleButtonState(inputList, submitButton, options);
      });
    });
  }

  enableValidation() {
    this._form.addEventListener("submit", (e) => {
      e.preventDefault();
    });
    setEventListeners(inputList, formEl, options);
  }
}

const editFormValidator = new FormValidator(settings, editForm);
editFormValidator.enableValidation();

export default FormValidator;
