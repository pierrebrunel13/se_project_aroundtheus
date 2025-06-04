export default class Card {
  constructor({
    data,
    cardSelector,
    handleImageClick,
    handleDeleteClick,
    handleLikeClick,
    currentUserId,
    handleOpenImage,
  }) {
    this._data = data;
    this._name = data.name;
    this._link = data.link;
    this._id = data._id;
    this._ownerId = data.owner._id;
    this._currentUserId = currentUserId;
    this._cardSelector = cardSelector;
    this._handleImageClick = handleImageClick;
    this._handleDeleteClick = handleDeleteClick;
    this._handleLikeClick = handleLikeClick;
  }

  _setEventListeners() {
    this._cardElement.querySelector(".card__like-button").addEventListener("click", () => {
      this._handleLikeClick();
    });

    this._cardElement.querySelector(".card__delete-button").addEventListener("click", () => {
      this._handleDeleteClick(this);
    });

    this._cardElement.querySelector(".card__image").addEventListener("click", () => {
      this._handleImageClick(this._name, this._link);
    });
  }

  removeCard() {
    this._cardElement.remove();
    this._cardElement = null;
  }

  handleLikeIcon() {
    this._likeButton.classList.toggle("card__like-button_active");
  }

  getId() {
    console.log("Weve got id");
    return this._id;
  }

  getView() {
    this._cardElement = document
      .querySelector(this._cardSelector)
      .content.querySelector(".card")
      .cloneNode(true);
    this._likeButton = this._cardElement.querySelector(".card__like-button");

    const cardImageEl = this._cardElement.querySelector(".card__image");
    const cardTitleEl = this._cardElement.querySelector(".card__title");

    cardImageEl.src = this._link;
    cardImageEl.alt = this._name;
    cardTitleEl.textContent = this._name;
    if(this._data.isLiked) {
      this.handleLikeIcon()
    }

    this._setEventListeners();

    return this._cardElement;
  }
}
