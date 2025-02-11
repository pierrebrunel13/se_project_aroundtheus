export default class Card {
  constructor({ name, link }, cardSelector) {
    console.log({ name, link });
    this._name = name;
    this._link = link;
    this._cardSeletor = cardSelector;
  }

  _setEventListeners() {
    //".card__like-button"
    this._cardElement.querySelector(".card__like-button").addEventListener("click", () => {
      this._handleLikeIcon();
    });

    //".card__delete-button"
    this._cardElement.querySelector(".card__delete-button").addEventListener("click", () => {
      this._handleDeleteCard();
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

    //get card view
    // set eventlistener
    this._setEventListeners();
    // return card
  }
}
