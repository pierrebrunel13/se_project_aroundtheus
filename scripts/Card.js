export default class Card {
  constructor({ name, link }, cardSelector, previewImage, previewCaption, imageOpenModal) {
    console.log({ name, link });
    this._name = name;
    this._link = link;
    this._cardSeletor = cardSelector;
    this._previewImage = previewImage;
    this._previewCaption = previewCaption;
    this._imageOpenModal = imageOpenModal;
  }

  _setEventListeners() {
    this._cardElement.querySelector(".card__like-button").addEventListener("click", () => {
      this._handleLikeIcon();
    });

    this._cardElement.querySelector(".card__delete-button").addEventListener("click", () => {
      this._handleDeleteCard();
    });

    this._cardElement.querySelector(".card__image").addEventListener("click", () => {
      this._handleOpenImage();
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

  _handleOpenImage() {
    this._previewImage.src = this._link;
    this._previewImage.alt = this._name;
    this._previewCaption.textContent = this._name;
    openModal(this._imageOpenModal);
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
