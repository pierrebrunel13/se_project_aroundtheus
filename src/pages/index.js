import "../pages/index.css";
import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithImage from "../components/PopupWithImage.js";
import Section from "../components/Section.js";
import UserInfo from "../components/UserInfo.js";
import { initialCards, validationSettings } from "../utils/constants.js";
import { api } from "../components/api.js";
import PopupWithConfirm from "../components/PopupWithConfirm.js";

// DOM
const profileEditButton = document.querySelector("#profile__edit-button");
const profileAddButton = document.querySelector(".profile__add-button");
const profileTitleInput = document.querySelector("#profile-title-input");
const profileDescriptionInput = document.querySelector("#profile-description-input");
const profileEditForm = document.querySelector("#profile-edit-modal .modal__form");
const profileAddForm = document.querySelector("#profile-add-modal .modal__form");

// User Info
const userInfo = new UserInfo({
  nameSelector: "#profile__title",
  jobSelector: "#profile__description",
});

// Popups
const imagePopup = new PopupWithImage("#image__open-modal");
imagePopup.setEventListeners();

const profileEditPopup = new PopupWithForm("#profile-edit-modal", (formData) => {
  console.log(formData);
  userInfo.setUserInfo({
    name: formData.title,
    job: formData.description,
  });
  profileEditPopup.close();
});
profileEditPopup.setEventListeners();

const profileAddPopup = new PopupWithForm("#profile-add-modal", (formData) => {
  const cardData = {
    name: formData.title,
    link: formData.url,
  };
  const cardElement = createCard(cardData);
  cardSection.addItem(cardElement);
  profileAddPopup.close();
  profileAddForm.reset();
  addFormValidator.toggleButtonState();
});
profileAddPopup.setEventListeners();

// Validation
const editFormValidator = new FormValidator(validationSettings, profileEditForm);
editFormValidator.enableValidation();

const addFormValidator = new FormValidator(validationSettings, profileAddForm);
addFormValidator.enableValidation();

// Card creation
function createCard(data) {
  const card = new Card(
    data,
    "#card-template",
    (cardData) => imagePopup.open(cardData),
    (cardData) => {
      // open confirmation popup
      confirmationPopup.open();

      // delete card on server (api call) WHEN user clicks delete
      // pass in the card id (found in cardData)
    }
  );
  return card.getView();
}

//  confirmation popup

const confirmationPopup = new PopupWithConfirm( {popupSelector: "#delete-card-modal"});
confirmationPopup.setEventListeners();

// Section for cards
const cardSection = new Section(
  {
    renderer: (cardData) => {
      const cardElement = createCard(cardData);
      cardSection.addItem(cardElement);
    },
  },
  ".cards__list"
);

// Event Listeners
profileEditButton.addEventListener("click", () => {
  const { name, job } = userInfo.getUserInfo();
  profileTitleInput.value = name;
  profileDescriptionInput.value = job;
  profileEditPopup.open();
});

profileAddButton.addEventListener("click", () => {
  profileAddPopup.open();
});

api
  .getInitialCards()
  .then((cards) => {
    cardSection.renderItems(cards);
  })
  .catch((error) => {});
