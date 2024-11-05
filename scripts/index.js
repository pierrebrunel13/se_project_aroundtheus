
const initialCards = [
{
    name: "Yosemite Valley",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/yosemite.jpg"
},

{
    name: "Lake Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/lake-louise.jpg"
},

{
    name: "Bald Mountains",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/bald-mountains.jpg"

},

{
    name: "Latemar",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/latemar.jpg"


},

{
    name: "Vanoise National Park",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/vanoise.jpg"


},

{
    name: "Lago di Braies",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/lago.jpg"

},

];

/*Element*/
 
console.log(initialCards);

const profileEditButton = document.querySelector("#profile__edit-button");
const profileEditModal = document.querySelector('#profile-edit-modal');
const modalCloseButton = document.querySelector(".modal__close");
const profileTitle = document.querySelector("#profile__title");
const profileDescription = document.querySelector("#profile__description");
const profileTitleInput = document.querySelector("#profile-title-input");
const profileDescriptionInput = document.querySelector("#profile-description-input");
const profileEditForm = profileEditModal.querySelector(".modal__form");

/*functions*/

function closePopop() {
    profileEditModal.classList.remove("modal__opened");
}

/* EVENT LISTENER */

profileEditButton.addEventListener('click', () => {
profileTitleInput.value = profileTitle.textContent;
profileDescriptionInput.value = profileDescription.textContent;

   profileEditModal.classList.add("modal__opened")
});

modalCloseButton.addEventListener('click', () => {
closePopop();
} ); 

profileEditForm.addEventListener('submit', (e) => {
e.preventDefault();
profileTitle.textContent = profileTitleInput.value;
profileDescription.textContent = profileDescriptionInput.value;
closePopop();
});
