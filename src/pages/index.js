import "../pages/index.css";
import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithImage from "../components/PopupWithImage.js";
import Section from "../components/Section.js";
import UserInfo from "../components/UserInfo.js";
import { initialCards, validationSettings } from "../utils/constants.js";
import { api } from "../components/Api.js";
import PopupWithConfirm from "../components/PopupWithConfirm.js";

// DOM Elements
const profileEditButton = document.querySelector("#profile__edit-button");
const profileAddButton = document.querySelector(".profile__add-button");
const profileTitleInput = document.querySelector("#profile-title-input");
const profileDescriptionInput = document.querySelector("#profile-description-input");
const profileEditForm = document.querySelector("#profile-edit-modal .modal__form");
const profileAddForm = document.querySelector("#profile-add-modal .modal__form");
const avatarEditButton = document.querySelector("#profile-avatar-edit");

// User Info
const userInfo = new UserInfo({
  nameSelector: "#profile__title",
  jobSelector: "#profile__description",
  avatarSelector: "#profile-avatar",
});

// Popups
const imagePopup = new PopupWithImage("#image__open-modal");
imagePopup.setEventListeners();

const confirmationPopup = new PopupWithConfirm({
  popupSelector: "#delete-card-modal",
});

confirmationPopup.setEventListeners();
const profileEditPopup = new PopupWithForm("#profile-edit-modal", handleProfileEditSubmit);
profileEditPopup.setEventListeners();

const profileAddPopup = new PopupWithForm("#profile-add-modal", handleCardAddSubmit);
profileAddPopup.setEventListeners();

const avatarEditPopup = new PopupWithForm("#avatar-edit-modal", handleAvatarEditSubmit);
avatarEditPopup.setEventListeners();

// Form Validators
const editFormValidator = new FormValidator(validationSettings, profileEditForm);
editFormValidator.enableValidation();

const addFormValidator = new FormValidator(validationSettings, profileAddForm);
addFormValidator.enableValidation();

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

// Current User ID
let currentUserId;

// Initial Data Load
Promise.all([api.getUserInfo(), api.getInitialCards()])
  .then(([userData, cards]) => {
    currentUserId = userData._id;
    userInfo.setUserInfo({
      name: userData.name,
      about: userData.about,
      avatar: userData.avatar,
    });
    cardSection.renderItems(
      cards.map((card) => ({
        ...card,
        currentUserId,
      }))
    );
  })
  .catch(console.error);

// Event Listeners
profileEditButton.addEventListener("click", () => {
  const { name, about } = userInfo.getUserInfo();
  profileTitleInput.value = name;
  profileDescriptionInput.value = about;
  profileEditPopup.open();
});

profileAddButton.addEventListener("click", () => {
  profileAddPopup.open();
});

avatarEditButton.addEventListener("click", () => {
  avatarEditPopup.open();
});

// Functions
function createCard(cardData) {
  // const card = new Card(params)
  return new Card({
    data: cardData,
    cardSelector: "#card-template",
    // handleImageClick: (data) => imagePopup.open(data),
    handleImageClick: (name, link) => imagePopup.open(name, link),
    handleDeleteClick: (card) => {
      console.log("Delete button clicked");
      // checking to see
      confirmationPopup.setSubmitAction(() => {
        // card.setLoadingState(true, "delete");
        console.log(card);
        api
          .deleteCard(card.getId())
          .then(() => {
            card.removeCard();
            confirmationPopup.close();
          })
          .catch(console.error)
          .finally(() => card.setLoadingState(false, "delete"));
      });
      confirmationPopup.open();
    },
    handleLikeClick: (isLiked) => {
      return isLiked ? api.unlikeCard(cardData._id) : api.likeCard(cardData._id);
    },
    currentUserId,
  }).getView();
}
// testing
// this._popupElement
//   .querySelector(".modal__form")
//   .addEventListener("submit", (evt) => {
//     evt.preventDefault();
//     if (this._handleSubmit) {
//       this._handleSubmit();
//     }
//   });

function handleProfileEditSubmit(formData) {
  profileEditPopup.setLoadingState(true);
  api
    .setUserInfo({
      name: formData.title,
      about: formData.description,
    })
    .then((userData) => {
      userInfo.setUserInfo({
        name: userData.name,
        about: userData.about,
      });
      profileEditPopup.close();
    })
    .catch(console.error)
    .finally(() => profileEditPopup.setLoadingState(false));
}

function handleCardAddSubmit(formData) {
  profileAddPopup.setLoadingState(true);
  api
    .addCard({
      name: formData.title,
      link: formData.url,
    })
    .then((cardData) => {
      const cardElement = createCard({
        ...cardData,
        currentUserId,
      });
      cardSection.addItem(cardElement);
      profileAddPopup.close();
      profileAddForm.reset();
    })
    .catch(console.error)
    .finally(() => profileAddPopup.setLoadingState(false));
}

function handleAvatarEditSubmit(formData) {
  avatarEditPopup.setLoadingState(true);
  api
    .updateAvatar({ avatar: formData.avatar })
    .then((userData) => {
      userInfo.setUserInfo({ avatar: userData.avatar });
      avatarEditPopup.close();
    })
    .catch(console.error)
    .finally(() => avatarEditPopup.setLoadingState(false));
}
