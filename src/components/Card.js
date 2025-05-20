export default class Card {
  constructor({
    data,
    cardSelector,
    handleImageClick,
    handleDeleteClick,
    handleLikeClick,
    currentUserId
  }) {
    this._data = data;
    this._name = data.name;
    this._link = data.link;
    this._id = data._id;
    this._likes = data.likes || [];
    this._ownerId = data.owner._id;
    this._currentUserId = currentUserId;
    this._cardSelector = cardSelector;
    this._handleImageClick = handleImageClick;
    this._handleDeleteClick = handleDeleteClick;
    this._handleLikeClick = handleLikeClick;
  }


  

  _setEventListeners() {
    this._cardElement.querySelector(".card__like-button").addEventListener("click", () => {
      this._handleLikeIcon();
    });

    this._cardElement.querySelector(".card__delete-button").addEventListener("click", () => {
      this._handleDeleteClick(this._cardData);
    });

    this._cardElement.querySelector(".card__image").addEventListener("click", () => {
      this._handleOpenImage(this._cardData);
    });
  }

  _handleDeleteCard() {
    this._cardElement.remove();
    this._cardElement = null;
  }

  _handleLikeIcon() {
    this._cardElement
      .querySelector(".card__like-button")
      .classList.toggle("card__like-button_active");
  }

  getView() {
    this._cardElement = document
      .querySelector(this._cardSeletor)
      .content.querySelector(".card")
      .cloneNode(true);

    const cardImageEl = this._cardElement.querySelector(".card__image");
    const cardTitleEl = this._cardElement.querySelector(".card__title");

    cardImageEl.src = this._link;
    cardImageEl.alt = this._name;
    cardTitleEl.textContent = this._name;

    this._setEventListeners();

    return this._cardElement;
  }

  

}


