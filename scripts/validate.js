// enabling validation by calling enableValidation()
// pass all the settings on call

function showInputError(formEl, inputEl, { inputErrorClass, errorClass}) {
  const { inputErrorClass } = options;
const errorMessageEl = formEl.querySelector("#${inputEl.id}-error");
inputEl.classList.add(inputErrorClass);
errorMessageEl.textContent = inputEl.validationMessage;
errorMessageEl.classList.add(errorClass);
};

function hideInputError(formEl, inputEl, { inputErrorClass, errorClass}) {
  const { inputErrorClass } = options;
const errorMessageEl = formEl.querySelector("#${inputEl.id}-error");
inputEl.classList.remove(inputErrorClass);
errorMessageEl.textContent = "";
errorMessageEl.classList.remove(errorClass);
};



function checkInputValidity( formEl, inputEl, options) {
if(!inputEl.validity.valid) {
  showInputError(formEl, inputEl, options);
} else {
  hideInputError(formEl, inputEl, options);
};

function hasInvalidInput(inputList) {
  return !inputList.every(inputEl => inputEl.validity).valid
}

};

function toggleButtonState(inputEls, submitButton, { inactiveButtonClass}) {
  

if(foundInvalid) {
  submitButton.classList.add( inactiveButtonClass);
 return submitButton.disabled = true;
} 
  submitButton.classList.remove( inactiveButtonClass);
  submitButton.disabled = false;

};

function setEventListeners(formEl, options) {
const {inputSelector} = options;
  const inputEls = [...formEl.querySelectorAll(inputSelector)];
  const submitButton = formEl.querySelector(".modal__button");
inputEls.forEach(inputEl => {
  inputEl.addEventListener("input", (e) => {
checkInputValidity(formEl, inputEl, options);
toggleButtonState(inputEls, submitButton, options);
  });
})
};

function enableValidation(options) {
    const formEls = [...document.querySelectorAll(options.formSelector)];
    formEls.forEach((formEl) => {
      formEl.addEventListener('submit', (e) => {
        e.preventDefault();

      });

      setEventListeners(formEl, options);
      // look for all input inside of form
      // loop through all input to see if all are valid
      // if in put is not valid
      // get validation ,message 
      // add error class to the input
      // display error message
      //disable button
      // if all button are valid
      //enable button
      // reset error message

    });
};

const config = {
    formSelector: ".modal__form",
    inputSelector: ".modal__input", 
    submitButtonSelector: ".modal__button",
    inactiveButtonClass: "popup__button_disabled",
    inputErrorClass: "popup__input_type_error",
    errorClass: "popup__error_visible"
  };

enableValidation(config);