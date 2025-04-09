import "../pages/index.css";
import Card from "../scripts/Card.js";
import FormValidator from "../scripts/FormValidator.js";
import PopupWithForm from "../scripts/PopupWithForm.js";
import PopupWithImage from "../scripts/PopupWithImage.js";
import { initialCards, validationSettings } from "../utils/constants.js";

/* DOM Elements */
const profileEditButton = document.querySelector("#profile__edit-button");
const profileTitle = document.querySelector("#profile__title");
const profileDescription = document.querySelector("#profile__description");
const profileTitleInput = document.querySelector("#profile-title-input");
const profileDescriptionInput = document.querySelector("#profile-description-input");
const profileAddButton = document.querySelector(".profile__add-button");
const cardListEl = document.querySelector(".cards__list");
const profileEditForm = document.querySelector("#profile-edit-modal .modal__form");
const profileAddForm = document.querySelector("#profile-add-modal .modal__form");

/* Validators */
const editFormValidator = new FormValidator(validationSettings, profileEditForm);
editFormValidator.enableValidation();

const addFormValidator = new FormValidator(validationSettings, profileAddForm);
addFormValidator.enableValidation();

/* Popups */
const imagePopup = new PopupWithImage("#image__open-modal");
imagePopup.setEventListeners();

const profileEditPopup = new PopupWithForm("#profile-edit-modal", (formData) => {
  profileTitle.textContent = formData["profile-title-input"];
  profileDescription.textContent = formData["profile-description-input"];
  profileEditPopup.close();
});
profileEditPopup.setEventListeners();

const profileAddPopup = new PopupWithForm("#profile-add-modal", (formData) => {
  const name = formData["modal__input_type_title"];
  const link = formData["modal__input_type_url"];
  renderCard({ name, link });
  profileAddPopup.close();
  profileAddForm.reset();
  addFormValidator.toggleButtonState();
});
profileAddPopup.setEventListeners();

/* Functions */
function fillProfileForm() {
  profileTitleInput.value = profileTitle.textContent;
  profileDescriptionInput.value = profileDescription.textContent;
}

function handleCardClick({ name, link }) {
  imagePopup.open({ name, link });
}

function renderCard(cardData) {
  const card = new Card(cardData, "#card-template", handleCardClick);
  cardListEl.prepend(card.getView());
}

/* Event Listeners */
profileEditButton.addEventListener("click", () => {
  fillProfileForm();
  profileEditPopup.open();
});

profileAddButton.addEventListener("click", () => {
  profileAddPopup.open();
});

/* Initial Cards */
initialCards.forEach(renderCard);
