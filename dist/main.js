!function(){"use strict";class t{constructor(t,e,n){this._name=t.name,this._link=t.link,this._cardSeletor=e,this._handleOpenImage=n,this._cardData=t}_setEventListeners(){this._cardElement.querySelector(".card__like-button").addEventListener("click",(()=>{this._handleLikeIcon()})),this._cardElement.querySelector(".card__delete-button").addEventListener("click",(()=>{this._handleDeleteCard()})),this._cardElement.querySelector(".card__image").addEventListener("click",(()=>{this._handleOpenImage(this._cardData)}))}_handleDeleteCard(){this._cardElement.remove(),this._cardElement=null}_handleLikeIcon(){this._cardElement.querySelector(".card__like-button").classList.toggle("card__like-button_active")}getView(){this._cardElement=document.querySelector(this._cardSeletor).content.querySelector(".card").cloneNode(!0);const t=this._cardElement.querySelector(".card__image"),e=this._cardElement.querySelector(".card__title");return t.src=this._link,t.alt=this._name,e.textContent=this._name,this._setEventListeners(),this._cardElement}}var e=class{constructor(t,e){this._inputSelector=t.inputSelector,this._submitButtonSelector=t.submitButtonSelector,this._inactiveButtonClass=t.inactiveButtonClass,this._inputErrorClass=t.inputErrorClass,this._errorClass=t.errorClass,this._form=e,this._inputList=[...this._form.querySelectorAll(this._inputSelector)],this._submitButton=this._form.querySelector(this._submitButtonSelector)}_showInputError(t){const e=this._form.querySelector(`#${t.id}-error`);t.classList.add(this._inputErrorClass),e.textContent=t.validationMessage,e.classList.add(this._errorClass)}_hideInputError(t){const e=this._form.querySelector(`#${t.id}-error`);t.classList.remove(this._inputErrorClass),e.textContent="",e.classList.remove(this._errorClass)}toggleButtonState(){this._hasInvalidInput()?(this._submitButton.classList.add(this._inactiveButtonClass),this._submitButton.disabled=!0):(this._submitButton.classList.remove(this._inactiveButtonClass),this._submitButton.disabled=!1)}_hasInvalidInput(){return this._inputList.some((t=>!t.validity.valid))}_checkInputValidity(t){t.validity.valid?this._hideInputError(t):this._showInputError(t)}_setEventListeners(){this.toggleButtonState(),this._inputList.forEach((t=>{t.addEventListener("input",(()=>{this._checkInputValidity(t),this.toggleButtonState()}))}))}enableValidation(){this._form.addEventListener("submit",(t=>{t.preventDefault()})),this._setEventListeners()}};const n=document.querySelector("#profile__edit-button"),r=document.querySelector("#profile-edit-modal"),o=document.querySelector("#profile-add-modal"),i=r.querySelector(".modal__close"),s=document.querySelector("#profile__title"),a=document.querySelector("#profile__description"),l=document.querySelector("#profile-title-input"),c=document.querySelector("#profile-description-input"),u=r.querySelector(".modal__form"),d=o.querySelector(".modal__form"),_=document.querySelector(".cards__list"),m=(document.querySelector("#card-template").content.firstElementChild,document.querySelector(".profile__add-button")),h=o.querySelector(".modal__close"),p=d.querySelector("#modal__input_type_title"),v=d.querySelector("#modal__input_type_url"),S=document.querySelector("#image__open-modal"),y=S.querySelector(".modal__image"),E=S.querySelector(".modal__caption"),L=document.querySelector("#image__close-button");function f(t){t.classList.add("modal_opened"),document.addEventListener("keyup",w)}function g(t){t.classList.remove("modal_opened"),document.removeEventListener("keyup",w)}const k=t=>{y.src=t.link,y.alt=t.name,E.textContent=t.name,f(S)};L.addEventListener("click",(()=>{g(S)}));const q={inputSelector:".modal__input",submitButtonSelector:".modal__button",inactiveButtonClass:"modal__button_disabled",inputErrorClass:"modal__input_type_error",errorClass:"modal__error_visible"};new e(q,u).enableValidation();const b=new e(q,d);function C(e){const n=function(e){return new t(e,"#card-template",k).getView()}(e);_.prepend(n)}b.enableValidation();const w=t=>{if("Escape"===t.key){const t=document.querySelector(".modal_opened");t&&g(t)}};function B(t){t.target.classList.contains("modal_opened")&&g(t.target)}document.querySelectorAll(".modal").forEach((t=>{t.addEventListener("click",B)})),n.addEventListener("click",(()=>{l.value=s.textContent,c.value=a.textContent,f(r)})),i.addEventListener("click",(()=>g(r))),h.addEventListener("click",(()=>g(o))),u.addEventListener("submit",(function(t){t.preventDefault(),s.textContent=l.value,a.textContent=c.value,g(r)})),d.addEventListener("submit",(function(t){t.preventDefault();const e=p.value.trim(),n=v.value.trim();e&&n&&(C({name:e,link:n}),g(o),t.target.reset(),b.toggleButtonState())})),m.addEventListener("click",(()=>{f(o)})),[{name:"Yosemite Valley",link:"https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/yosemite.jpg"},{name:"Lake Louise",link:"https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/lake-louise.jpg"},{name:"Bald Mountains",link:"https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/bald-mountains.jpg"},{name:"Latemar",link:"https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/latemar.jpg"},{name:"Vanoise National Park",link:"https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/vanoise.jpg"},{name:"Lago di Braies",link:"https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/lago.jpg"}].forEach((t=>C(t))),m.addEventListener("click",(()=>f(o)))}();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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cEQsaUJBQWlCLFNBQVMsSUFBTXdFLEVBQVd0QixLQUN2RVksRUFBMkI5RCxpQkFBaUIsU0FBUyxJQUFNd0UsRUFBV3JCLEtBQ3RFTSxFQUFnQnpELGlCQUFpQixVQS9DakMsU0FBaUMrQyxHQUMvQkEsRUFBRUMsaUJBQ0ZLLEVBQWF2QyxZQUFjeUMsRUFBa0I4QixNQUM3Qy9CLEVBQW1CeEMsWUFBYzBDLEVBQXdCNkIsTUFDekRiLEVBQVd0QixFQUNiLElBMkNBUSxFQUFlMUQsaUJBQWlCLFVBekNoQyxTQUFnQytDLEdBQzlCQSxFQUFFQyxpQkFDRixNQUFNekQsRUFBT3dFLEVBQWVzQixNQUFNQyxPQUM1QjdGLEVBQU91RSxFQUFhcUIsTUFBTUMsT0FDM0IvRixHQUFTRSxJQUNkb0YsRUFBVyxDQUFFdEYsT0FBTUUsU0FDbkIrRSxFQUFXckIsR0FDWEosRUFBRW9DLE9BQU9JLFFBQ1RYLEVBQWlCdEMsb0JBQ25CLElBa0NBc0IsRUFBaUI1RCxpQkFBaUIsU0FBUyxLQUN6Q3FFLEVBQVVsQixFQUFnQixJQW5LUCxDQUNuQixDQUNFNUQsS0FBTSxrQkFDTkUsS0FBTSxzR0FHUixDQUNFRixLQUFNLGNBQ05FLEtBQU0seUdBR1IsQ0FDRUYsS0FBTSxpQkFDTkUsS0FBTSw0R0FHUixDQUNFRixLQUFNLFVBQ05FLEtBQU0scUdBR1IsQ0FDRUYsS0FBTSx3QkFDTkUsS0FBTSxxR0FHUixDQUNFRixLQUFNLGlCQUNORSxLQUFNLG1HQTBJR29ELFNBQVMzRCxHQUFhMkYsRUFBVzNGLEtBRzlDMEUsRUFBaUI1RCxpQkFBaUIsU0FBUyxJQUFNcUUsRUFBVWxCLEkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9Bcm91bmQgdGhlIFVTLy4vc3JjL3NjcmlwdHMvQ2FyZC5qcyIsIndlYnBhY2s6Ly9Bcm91bmQgdGhlIFVTLy4vc3JjL3NjcmlwdHMvRm9ybVZhbGlkYXRvci5qcyIsIndlYnBhY2s6Ly9Bcm91bmQgdGhlIFVTLy4vc3JjL3BhZ2VzL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGNsYXNzIENhcmQge1xyXG4gIGNvbnN0cnVjdG9yKGNhcmREYXRhLCBjYXJkU2VsZWN0b3IsIGhhbmRsZU9wZW5JbWFnZSkge1xyXG4gICAgdGhpcy5fbmFtZSA9IGNhcmREYXRhLm5hbWU7XHJcbiAgICB0aGlzLl9saW5rID0gY2FyZERhdGEubGluaztcclxuICAgIHRoaXMuX2NhcmRTZWxldG9yID0gY2FyZFNlbGVjdG9yO1xyXG4gICAgdGhpcy5faGFuZGxlT3BlbkltYWdlID0gaGFuZGxlT3BlbkltYWdlO1xyXG4gICAgdGhpcy5fY2FyZERhdGEgPSBjYXJkRGF0YTtcclxuICB9XHJcblxyXG4gIF9zZXRFdmVudExpc3RlbmVycygpIHtcclxuICAgIHRoaXMuX2NhcmRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2FyZF9fbGlrZS1idXR0b25cIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgdGhpcy5faGFuZGxlTGlrZUljb24oKTtcclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMuX2NhcmRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2FyZF9fZGVsZXRlLWJ1dHRvblwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICB0aGlzLl9oYW5kbGVEZWxldGVDYXJkKCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLl9jYXJkRWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLmNhcmRfX2ltYWdlXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgIHRoaXMuX2hhbmRsZU9wZW5JbWFnZSh0aGlzLl9jYXJkRGF0YSk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIF9oYW5kbGVEZWxldGVDYXJkKCkge1xyXG4gICAgdGhpcy5fY2FyZEVsZW1lbnQucmVtb3ZlKCk7XHJcbiAgICB0aGlzLl9jYXJkRWxlbWVudCA9IG51bGw7XHJcbiAgfVxyXG5cclxuICBfaGFuZGxlTGlrZUljb24oKSB7XHJcbiAgICB0aGlzLl9jYXJkRWxlbWVudFxyXG4gICAgICAucXVlcnlTZWxlY3RvcihcIi5jYXJkX19saWtlLWJ1dHRvblwiKVxyXG4gICAgICAuY2xhc3NMaXN0LnRvZ2dsZShcImNhcmRfX2xpa2UtYnV0dG9uX2FjdGl2ZVwiKTtcclxuICB9XHJcblxyXG4gIGdldFZpZXcoKSB7XHJcbiAgICB0aGlzLl9jYXJkRWxlbWVudCA9IGRvY3VtZW50XHJcbiAgICAgIC5xdWVyeVNlbGVjdG9yKHRoaXMuX2NhcmRTZWxldG9yKVxyXG4gICAgICAuY29udGVudC5xdWVyeVNlbGVjdG9yKFwiLmNhcmRcIilcclxuICAgICAgLmNsb25lTm9kZSh0cnVlKTtcclxuXHJcbiAgICBjb25zdCBjYXJkSW1hZ2VFbCA9IHRoaXMuX2NhcmRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2FyZF9faW1hZ2VcIik7XHJcbiAgICBjb25zdCBjYXJkVGl0bGVFbCA9IHRoaXMuX2NhcmRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2FyZF9fdGl0bGVcIik7XHJcblxyXG4gICAgY2FyZEltYWdlRWwuc3JjID0gdGhpcy5fbGluaztcclxuICAgIGNhcmRJbWFnZUVsLmFsdCA9IHRoaXMuX25hbWU7XHJcbiAgICBjYXJkVGl0bGVFbC50ZXh0Q29udGVudCA9IHRoaXMuX25hbWU7XHJcblxyXG4gICAgdGhpcy5fc2V0RXZlbnRMaXN0ZW5lcnMoKTtcclxuXHJcbiAgICByZXR1cm4gdGhpcy5fY2FyZEVsZW1lbnQ7XHJcbiAgfVxyXG59XHJcbiIsImNsYXNzIEZvcm1WYWxpZGF0b3Ige1xyXG4gIGNvbnN0cnVjdG9yKHNldHRpbmdzLCBmb3JtRWwpIHtcclxuICAgIHRoaXMuX2lucHV0U2VsZWN0b3IgPSBzZXR0aW5ncy5pbnB1dFNlbGVjdG9yO1xyXG4gICAgdGhpcy5fc3VibWl0QnV0dG9uU2VsZWN0b3IgPSBzZXR0aW5ncy5zdWJtaXRCdXR0b25TZWxlY3RvcjtcclxuICAgIHRoaXMuX2luYWN0aXZlQnV0dG9uQ2xhc3MgPSBzZXR0aW5ncy5pbmFjdGl2ZUJ1dHRvbkNsYXNzO1xyXG4gICAgdGhpcy5faW5wdXRFcnJvckNsYXNzID0gc2V0dGluZ3MuaW5wdXRFcnJvckNsYXNzO1xyXG4gICAgdGhpcy5fZXJyb3JDbGFzcyA9IHNldHRpbmdzLmVycm9yQ2xhc3M7XHJcblxyXG4gICAgdGhpcy5fZm9ybSA9IGZvcm1FbDtcclxuICAgIHRoaXMuX2lucHV0TGlzdCA9IFsuLi50aGlzLl9mb3JtLnF1ZXJ5U2VsZWN0b3JBbGwodGhpcy5faW5wdXRTZWxlY3RvcildO1xyXG4gICAgdGhpcy5fc3VibWl0QnV0dG9uID0gdGhpcy5fZm9ybS5xdWVyeVNlbGVjdG9yKHRoaXMuX3N1Ym1pdEJ1dHRvblNlbGVjdG9yKTtcclxuICB9XHJcblxyXG4gIF9zaG93SW5wdXRFcnJvcihpbnB1dEVsKSB7XHJcbiAgICBjb25zdCBlcnJvck1lc3NhZ2VFbCA9IHRoaXMuX2Zvcm0ucXVlcnlTZWxlY3RvcihgIyR7aW5wdXRFbC5pZH0tZXJyb3JgKTtcclxuICAgIGlucHV0RWwuY2xhc3NMaXN0LmFkZCh0aGlzLl9pbnB1dEVycm9yQ2xhc3MpO1xyXG4gICAgZXJyb3JNZXNzYWdlRWwudGV4dENvbnRlbnQgPSBpbnB1dEVsLnZhbGlkYXRpb25NZXNzYWdlO1xyXG4gICAgZXJyb3JNZXNzYWdlRWwuY2xhc3NMaXN0LmFkZCh0aGlzLl9lcnJvckNsYXNzKTtcclxuICB9XHJcblxyXG4gIF9oaWRlSW5wdXRFcnJvcihpbnB1dEVsKSB7XHJcbiAgICBjb25zdCBlcnJvck1lc3NhZ2VFbCA9IHRoaXMuX2Zvcm0ucXVlcnlTZWxlY3RvcihgIyR7aW5wdXRFbC5pZH0tZXJyb3JgKTtcclxuICAgIGlucHV0RWwuY2xhc3NMaXN0LnJlbW92ZSh0aGlzLl9pbnB1dEVycm9yQ2xhc3MpO1xyXG4gICAgZXJyb3JNZXNzYWdlRWwudGV4dENvbnRlbnQgPSBcIlwiO1xyXG4gICAgZXJyb3JNZXNzYWdlRWwuY2xhc3NMaXN0LnJlbW92ZSh0aGlzLl9lcnJvckNsYXNzKTtcclxuICB9XHJcblxyXG4gIHRvZ2dsZUJ1dHRvblN0YXRlKCkge1xyXG4gICAgaWYgKHRoaXMuX2hhc0ludmFsaWRJbnB1dCgpKSB7XHJcbiAgICAgIHRoaXMuX3N1Ym1pdEJ1dHRvbi5jbGFzc0xpc3QuYWRkKHRoaXMuX2luYWN0aXZlQnV0dG9uQ2xhc3MpO1xyXG4gICAgICB0aGlzLl9zdWJtaXRCdXR0b24uZGlzYWJsZWQgPSB0cnVlO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5fc3VibWl0QnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUodGhpcy5faW5hY3RpdmVCdXR0b25DbGFzcyk7XHJcbiAgICAgIHRoaXMuX3N1Ym1pdEJ1dHRvbi5kaXNhYmxlZCA9IGZhbHNlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgX2hhc0ludmFsaWRJbnB1dCgpIHtcclxuICAgIHJldHVybiB0aGlzLl9pbnB1dExpc3Quc29tZSgoaW5wdXRFbCkgPT4ge1xyXG4gICAgICByZXR1cm4gIWlucHV0RWwudmFsaWRpdHkudmFsaWQ7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIF9jaGVja0lucHV0VmFsaWRpdHkoaW5wdXRFbCkge1xyXG4gICAgaWYgKCFpbnB1dEVsLnZhbGlkaXR5LnZhbGlkKSB7XHJcbiAgICAgIHRoaXMuX3Nob3dJbnB1dEVycm9yKGlucHV0RWwpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5faGlkZUlucHV0RXJyb3IoaW5wdXRFbCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBfc2V0RXZlbnRMaXN0ZW5lcnMoKSB7XHJcbiAgICB0aGlzLnRvZ2dsZUJ1dHRvblN0YXRlKCk7XHJcbiAgICB0aGlzLl9pbnB1dExpc3QuZm9yRWFjaCgoaW5wdXRFbCkgPT4ge1xyXG4gICAgICBpbnB1dEVsLmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCAoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5fY2hlY2tJbnB1dFZhbGlkaXR5KGlucHV0RWwpO1xyXG4gICAgICAgIHRoaXMudG9nZ2xlQnV0dG9uU3RhdGUoKTtcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGVuYWJsZVZhbGlkYXRpb24oKSB7XHJcbiAgICB0aGlzLl9mb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgKGUpID0+IHtcclxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgfSk7XHJcbiAgICB0aGlzLl9zZXRFdmVudExpc3RlbmVycygpO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRm9ybVZhbGlkYXRvcjtcclxuIiwiaW1wb3J0IFwiLi4vcGFnZXMvaW5kZXguY3NzXCI7XHJcblxyXG5pbXBvcnQgQ2FyZCBmcm9tIFwiLi4vc2NyaXB0cy9DYXJkLmpzXCI7XHJcbmltcG9ydCBGb3JtVmFsaWRhdG9yIGZyb20gXCIuLi9zY3JpcHRzL0Zvcm1WYWxpZGF0b3IuanNcIjtcclxuY29uc3QgaW5pdGlhbENhcmRzID0gW1xyXG4gIHtcclxuICAgIG5hbWU6IFwiWW9zZW1pdGUgVmFsbGV5XCIsXHJcbiAgICBsaW5rOiBcImh0dHBzOi8vcHJhY3RpY3VtLWNvbnRlbnQuczMudXMtd2VzdC0xLmFtYXpvbmF3cy5jb20vc29mdHdhcmUtZW5naW5lZXIvYXJvdW5kLXByb2plY3QveW9zZW1pdGUuanBnXCIsXHJcbiAgfSxcclxuXHJcbiAge1xyXG4gICAgbmFtZTogXCJMYWtlIExvdWlzZVwiLFxyXG4gICAgbGluazogXCJodHRwczovL3ByYWN0aWN1bS1jb250ZW50LnMzLnVzLXdlc3QtMS5hbWF6b25hd3MuY29tL3NvZnR3YXJlLWVuZ2luZWVyL2Fyb3VuZC1wcm9qZWN0L2xha2UtbG91aXNlLmpwZ1wiLFxyXG4gIH0sXHJcblxyXG4gIHtcclxuICAgIG5hbWU6IFwiQmFsZCBNb3VudGFpbnNcIixcclxuICAgIGxpbms6IFwiaHR0cHM6Ly9wcmFjdGljdW0tY29udGVudC5zMy51cy13ZXN0LTEuYW1hem9uYXdzLmNvbS9zb2Z0d2FyZS1lbmdpbmVlci9hcm91bmQtcHJvamVjdC9iYWxkLW1vdW50YWlucy5qcGdcIixcclxuICB9LFxyXG5cclxuICB7XHJcbiAgICBuYW1lOiBcIkxhdGVtYXJcIixcclxuICAgIGxpbms6IFwiaHR0cHM6Ly9wcmFjdGljdW0tY29udGVudC5zMy51cy13ZXN0LTEuYW1hem9uYXdzLmNvbS9zb2Z0d2FyZS1lbmdpbmVlci9hcm91bmQtcHJvamVjdC9sYXRlbWFyLmpwZ1wiLFxyXG4gIH0sXHJcblxyXG4gIHtcclxuICAgIG5hbWU6IFwiVmFub2lzZSBOYXRpb25hbCBQYXJrXCIsXHJcbiAgICBsaW5rOiBcImh0dHBzOi8vcHJhY3RpY3VtLWNvbnRlbnQuczMudXMtd2VzdC0xLmFtYXpvbmF3cy5jb20vc29mdHdhcmUtZW5naW5lZXIvYXJvdW5kLXByb2plY3QvdmFub2lzZS5qcGdcIixcclxuICB9LFxyXG5cclxuICB7XHJcbiAgICBuYW1lOiBcIkxhZ28gZGkgQnJhaWVzXCIsXHJcbiAgICBsaW5rOiBcImh0dHBzOi8vcHJhY3RpY3VtLWNvbnRlbnQuczMudXMtd2VzdC0xLmFtYXpvbmF3cy5jb20vc29mdHdhcmUtZW5naW5lZXIvYXJvdW5kLXByb2plY3QvbGFnby5qcGdcIixcclxuICB9LFxyXG5dO1xyXG5cclxuY29uc3QgY2FyZERhdGEgPSB7XHJcbiAgbmFtZTogXCJZb3NlbWl0ZSBWYWxsZXlcIixcclxuICBsaW5rOiBcImh0dHBzOi8vcHJhY3RpY3VtLWNvbnRlbnQuczMudXMtd2VzdC0xLmFtYXpvbmF3cy5jb20vc29mdHdhcmUtZW5naW5lZXIvYXJvdW5kLXByb2plY3QveW9zZW1pdGUuanBnXCIsXHJcbn07XHJcblxyXG4vKkVsZW1lbnQqL1xyXG5jb25zdCBwcm9maWxlRWRpdEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJvZmlsZV9fZWRpdC1idXR0b25cIik7XHJcbmNvbnN0IHByb2ZpbGVFZGl0TW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Byb2ZpbGUtZWRpdC1tb2RhbFwiKTtcclxuY29uc3QgcHJvZmlsZUFkZE1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcm9maWxlLWFkZC1tb2RhbFwiKTtcclxuY29uc3QgcHJvZmlsZUVkaXRNb2RhbENsb3NlQnV0dG9uID0gcHJvZmlsZUVkaXRNb2RhbC5xdWVyeVNlbGVjdG9yKFwiLm1vZGFsX19jbG9zZVwiKTtcclxuY29uc3QgcHJvZmlsZVRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcm9maWxlX190aXRsZVwiKTtcclxuY29uc3QgcHJvZmlsZURlc2NyaXB0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcm9maWxlX19kZXNjcmlwdGlvblwiKTtcclxuY29uc3QgcHJvZmlsZVRpdGxlSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Byb2ZpbGUtdGl0bGUtaW5wdXRcIik7XHJcbmNvbnN0IHByb2ZpbGVEZXNjcmlwdGlvbklucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcm9maWxlLWRlc2NyaXB0aW9uLWlucHV0XCIpO1xyXG5jb25zdCBwcm9maWxlRWRpdEZvcm0gPSBwcm9maWxlRWRpdE1vZGFsLnF1ZXJ5U2VsZWN0b3IoXCIubW9kYWxfX2Zvcm1cIik7XHJcbmNvbnN0IHByb2ZpbGVBZGRGb3JtID0gcHJvZmlsZUFkZE1vZGFsLnF1ZXJ5U2VsZWN0b3IoXCIubW9kYWxfX2Zvcm1cIik7XHJcbmNvbnN0IGNhcmRMaXN0RWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNhcmRzX19saXN0XCIpO1xyXG5jb25zdCBjYXJkVGVtcGxhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NhcmQtdGVtcGxhdGVcIikuY29udGVudC5maXJzdEVsZW1lbnRDaGlsZDtcclxuY29uc3QgYWRkTmV3Q2FyZEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvZmlsZV9fYWRkLWJ1dHRvblwiKTtcclxuY29uc3QgcHJvZmlsZUFkZE1vZGFsQ2xvc2VCdXR0b24gPSBwcm9maWxlQWRkTW9kYWwucXVlcnlTZWxlY3RvcihcIi5tb2RhbF9fY2xvc2VcIik7XHJcbmNvbnN0IGNhcmRUaXRsZUlucHV0ID0gcHJvZmlsZUFkZEZvcm0ucXVlcnlTZWxlY3RvcihcIiNtb2RhbF9faW5wdXRfdHlwZV90aXRsZVwiKTtcclxuY29uc3QgY2FyZFVybElucHV0ID0gcHJvZmlsZUFkZEZvcm0ucXVlcnlTZWxlY3RvcihcIiNtb2RhbF9faW5wdXRfdHlwZV91cmxcIik7XHJcbmNvbnN0IGltYWdlT3Blbk1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNpbWFnZV9fb3Blbi1tb2RhbFwiKTtcclxuY29uc3QgcHJldmlld0ltYWdlID0gaW1hZ2VPcGVuTW9kYWwucXVlcnlTZWxlY3RvcihcIi5tb2RhbF9faW1hZ2VcIik7XHJcbmNvbnN0IHByZXZpZXdDYXB0aW9uID0gaW1hZ2VPcGVuTW9kYWwucXVlcnlTZWxlY3RvcihcIi5tb2RhbF9fY2FwdGlvblwiKTtcclxuY29uc3QgaW1hZ2VSZW1vdmVCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2ltYWdlX19jbG9zZS1idXR0b25cIik7XHJcblxyXG4vKmZ1bmN0aW9ucyovXHJcbmZ1bmN0aW9uIGZpbGxQcm9maWxlRm9ybSgpIHtcclxuICBwcm9maWxlVGl0bGVJbnB1dC52YWx1ZSA9IHByb2ZpbGVUaXRsZS50ZXh0Q29udGVudDtcclxuICBwcm9maWxlRGVzY3JpcHRpb25JbnB1dC52YWx1ZSA9IHByb2ZpbGVEZXNjcmlwdGlvbi50ZXh0Q29udGVudDtcclxufVxyXG5cclxuZnVuY3Rpb24gb3Blbk1vZGFsKG1vZGFsKSB7XHJcbiAgbW9kYWwuY2xhc3NMaXN0LmFkZChcIm1vZGFsX29wZW5lZFwiKTtcclxuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5dXBcIiwgaGFuZGxlRXNjYXBlKTtcclxufVxyXG5cclxuZnVuY3Rpb24gY2xvc2VQb3B1cChtb2RhbCkge1xyXG4gIG1vZGFsLmNsYXNzTGlzdC5yZW1vdmUoXCJtb2RhbF9vcGVuZWRcIik7XHJcbiAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImtleXVwXCIsIGhhbmRsZUVzY2FwZSk7XHJcbn1cclxuXHJcbmNvbnN0IGhhbmRsZU9wZW5JbWFnZSA9IChjYXJkRGF0YSkgPT4ge1xyXG4gIHByZXZpZXdJbWFnZS5zcmMgPSBjYXJkRGF0YS5saW5rO1xyXG4gIHByZXZpZXdJbWFnZS5hbHQgPSBjYXJkRGF0YS5uYW1lO1xyXG4gIHByZXZpZXdDYXB0aW9uLnRleHRDb250ZW50ID0gY2FyZERhdGEubmFtZTtcclxuICBvcGVuTW9kYWwoaW1hZ2VPcGVuTW9kYWwpO1xyXG59O1xyXG5cclxuaW1hZ2VSZW1vdmVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICBjbG9zZVBvcHVwKGltYWdlT3Blbk1vZGFsKTtcclxufSk7XHJcblxyXG4vLyAgdmFsaWRhdGlvbiAvLy8vL1xyXG5cclxuY29uc3QgdmFsaWRhdGlvblNldHRpbmdzID0ge1xyXG4gIGlucHV0U2VsZWN0b3I6IFwiLm1vZGFsX19pbnB1dFwiLFxyXG4gIHN1Ym1pdEJ1dHRvblNlbGVjdG9yOiBcIi5tb2RhbF9fYnV0dG9uXCIsXHJcbiAgaW5hY3RpdmVCdXR0b25DbGFzczogXCJtb2RhbF9fYnV0dG9uX2Rpc2FibGVkXCIsXHJcbiAgaW5wdXRFcnJvckNsYXNzOiBcIm1vZGFsX19pbnB1dF90eXBlX2Vycm9yXCIsXHJcbiAgZXJyb3JDbGFzczogXCJtb2RhbF9fZXJyb3JfdmlzaWJsZVwiLFxyXG59O1xyXG5cclxuY29uc3QgZWRpdEZvcm1WYWxpZGF0b3IgPSBuZXcgRm9ybVZhbGlkYXRvcih2YWxpZGF0aW9uU2V0dGluZ3MsIHByb2ZpbGVFZGl0Rm9ybSk7XHJcbmVkaXRGb3JtVmFsaWRhdG9yLmVuYWJsZVZhbGlkYXRpb24oKTtcclxuY29uc3QgYWRkRm9ybVZhbGlkYXRvciA9IG5ldyBGb3JtVmFsaWRhdG9yKHZhbGlkYXRpb25TZXR0aW5ncywgcHJvZmlsZUFkZEZvcm0pO1xyXG5hZGRGb3JtVmFsaWRhdG9yLmVuYWJsZVZhbGlkYXRpb24oKTtcclxuXHJcbmZ1bmN0aW9uIGdldENhcmRFbGVtZW50KGNhcmREYXRhKSB7XHJcbiAgY29uc3QgY2FyZCA9IG5ldyBDYXJkKGNhcmREYXRhLCBcIiNjYXJkLXRlbXBsYXRlXCIsIGhhbmRsZU9wZW5JbWFnZSk7XHJcbiAgcmV0dXJuIGNhcmQuZ2V0VmlldygpO1xyXG59XHJcblxyXG5mdW5jdGlvbiByZW5kZXJDYXJkKGNhcmREYXRhKSB7XHJcbiAgY29uc3QgY2FyZEVsZW1lbnQgPSBnZXRDYXJkRWxlbWVudChjYXJkRGF0YSk7XHJcbiAgY2FyZExpc3RFbC5wcmVwZW5kKGNhcmRFbGVtZW50KTtcclxufVxyXG5cclxuLyogRXZlbnRzIGhhbmRsZXJzICovXHJcbmZ1bmN0aW9uIGhhbmRsZVByb2ZpbGVFZGl0U3VibWl0KGUpIHtcclxuICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgcHJvZmlsZVRpdGxlLnRleHRDb250ZW50ID0gcHJvZmlsZVRpdGxlSW5wdXQudmFsdWU7XHJcbiAgcHJvZmlsZURlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gcHJvZmlsZURlc2NyaXB0aW9uSW5wdXQudmFsdWU7XHJcbiAgY2xvc2VQb3B1cChwcm9maWxlRWRpdE1vZGFsKTtcclxufVxyXG5cclxuZnVuY3Rpb24gaGFuZGxlUHJvZmlsZUFkZFN1Ym1pdChlKSB7XHJcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gIGNvbnN0IG5hbWUgPSBjYXJkVGl0bGVJbnB1dC52YWx1ZS50cmltKCk7XHJcbiAgY29uc3QgbGluayA9IGNhcmRVcmxJbnB1dC52YWx1ZS50cmltKCk7XHJcbiAgaWYgKCFuYW1lIHx8ICFsaW5rKSByZXR1cm47XHJcbiAgcmVuZGVyQ2FyZCh7IG5hbWUsIGxpbmsgfSwgY2FyZExpc3RFbCk7XHJcbiAgY2xvc2VQb3B1cChwcm9maWxlQWRkTW9kYWwpO1xyXG4gIGUudGFyZ2V0LnJlc2V0KCk7XHJcbiAgYWRkRm9ybVZhbGlkYXRvci50b2dnbGVCdXR0b25TdGF0ZSgpO1xyXG59XHJcblxyXG5jb25zdCBoYW5kbGVFc2NhcGUgPSAoZSkgPT4ge1xyXG4gIGlmIChlLmtleSA9PT0gXCJFc2NhcGVcIikge1xyXG4gICAgY29uc3Qgb3Blbk1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tb2RhbF9vcGVuZWRcIik7XHJcbiAgICBpZiAob3Blbk1vZGFsKSB7XHJcbiAgICAgIGNsb3NlUG9wdXAob3Blbk1vZGFsKTtcclxuICAgIH1cclxuICB9XHJcbn07XHJcblxyXG5mdW5jdGlvbiBoYW5kbGVPdmVybGF5Q2xpY2soZSkge1xyXG4gIGlmIChlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJtb2RhbF9vcGVuZWRcIikpIHtcclxuICAgIGNsb3NlUG9wdXAoZS50YXJnZXQpO1xyXG4gIH1cclxufVxyXG5cclxuZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5tb2RhbFwiKS5mb3JFYWNoKChtb2RhbCkgPT4ge1xyXG4gIG1vZGFsLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBoYW5kbGVPdmVybGF5Q2xpY2spO1xyXG59KTtcclxuXHJcbi8qIEVWRU5UIExJU1RFTkVSICovXHJcblxyXG5wcm9maWxlRWRpdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gIGZpbGxQcm9maWxlRm9ybSgpO1xyXG5cclxuICBvcGVuTW9kYWwocHJvZmlsZUVkaXRNb2RhbCk7XHJcbn0pO1xyXG5cclxucHJvZmlsZUVkaXRNb2RhbENsb3NlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiBjbG9zZVBvcHVwKHByb2ZpbGVFZGl0TW9kYWwpKTtcclxucHJvZmlsZUFkZE1vZGFsQ2xvc2VCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IGNsb3NlUG9wdXAocHJvZmlsZUFkZE1vZGFsKSk7XHJcbnByb2ZpbGVFZGl0Rm9ybS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIGhhbmRsZVByb2ZpbGVFZGl0U3VibWl0KTtcclxucHJvZmlsZUFkZEZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCBoYW5kbGVQcm9maWxlQWRkU3VibWl0KTtcclxuXHJcbmFkZE5ld0NhcmRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICBvcGVuTW9kYWwocHJvZmlsZUFkZE1vZGFsKTtcclxufSk7XHJcblxyXG5pbml0aWFsQ2FyZHMuZm9yRWFjaCgoY2FyZERhdGEpID0+IHJlbmRlckNhcmQoY2FyZERhdGEsIGNhcmRMaXN0RWwpKTtcclxuXHJcbi8vIGFkZCBuZXcgY2FyZCBidXR0b25cclxuYWRkTmV3Q2FyZEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gb3Blbk1vZGFsKHByb2ZpbGVBZGRNb2RhbCkpO1xyXG4iXSwibmFtZXMiOlsiQ2FyZCIsImNvbnN0cnVjdG9yIiwiY2FyZERhdGEiLCJjYXJkU2VsZWN0b3IiLCJoYW5kbGVPcGVuSW1hZ2UiLCJ0aGlzIiwiX25hbWUiLCJuYW1lIiwiX2xpbmsiLCJsaW5rIiwiX2NhcmRTZWxldG9yIiwiX2hhbmRsZU9wZW5JbWFnZSIsIl9jYXJkRGF0YSIsIl9zZXRFdmVudExpc3RlbmVycyIsIl9jYXJkRWxlbWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJhZGRFdmVudExpc3RlbmVyIiwiX2hhbmRsZUxpa2VJY29uIiwiX2hhbmRsZURlbGV0ZUNhcmQiLCJyZW1vdmUiLCJjbGFzc0xpc3QiLCJ0b2dnbGUiLCJnZXRWaWV3IiwiZG9jdW1lbnQiLCJjb250ZW50IiwiY2xvbmVOb2RlIiwiY2FyZEltYWdlRWwiLCJjYXJkVGl0bGVFbCIsInNyYyIsImFsdCIsInRleHRDb250ZW50Iiwic2V0dGluZ3MiLCJmb3JtRWwiLCJfaW5wdXRTZWxlY3RvciIsImlucHV0U2VsZWN0b3IiLCJfc3VibWl0QnV0dG9uU2VsZWN0b3IiLCJzdWJtaXRCdXR0b25TZWxlY3RvciIsIl9pbmFjdGl2ZUJ1dHRvbkNsYXNzIiwiaW5hY3RpdmVCdXR0b25DbGFzcyIsIl9pbnB1dEVycm9yQ2xhc3MiLCJpbnB1dEVycm9yQ2xhc3MiLCJfZXJyb3JDbGFzcyIsImVycm9yQ2xhc3MiLCJfZm9ybSIsIl9pbnB1dExpc3QiLCJxdWVyeVNlbGVjdG9yQWxsIiwiX3N1Ym1pdEJ1dHRvbiIsIl9zaG93SW5wdXRFcnJvciIsImlucHV0RWwiLCJlcnJvck1lc3NhZ2VFbCIsImlkIiwiYWRkIiwidmFsaWRhdGlvbk1lc3NhZ2UiLCJfaGlkZUlucHV0RXJyb3IiLCJ0b2dnbGVCdXR0b25TdGF0ZSIsIl9oYXNJbnZhbGlkSW5wdXQiLCJkaXNhYmxlZCIsInNvbWUiLCJ2YWxpZGl0eSIsInZhbGlkIiwiX2NoZWNrSW5wdXRWYWxpZGl0eSIsImZvckVhY2giLCJlbmFibGVWYWxpZGF0aW9uIiwiZSIsInByZXZlbnREZWZhdWx0IiwicHJvZmlsZUVkaXRCdXR0b24iLCJwcm9maWxlRWRpdE1vZGFsIiwicHJvZmlsZUFkZE1vZGFsIiwicHJvZmlsZUVkaXRNb2RhbENsb3NlQnV0dG9uIiwicHJvZmlsZVRpdGxlIiwicHJvZmlsZURlc2NyaXB0aW9uIiwicHJvZmlsZVRpdGxlSW5wdXQiLCJwcm9maWxlRGVzY3JpcHRpb25JbnB1dCIsInByb2ZpbGVFZGl0Rm9ybSIsInByb2ZpbGVBZGRGb3JtIiwiY2FyZExpc3RFbCIsImFkZE5ld0NhcmRCdXR0b24iLCJmaXJzdEVsZW1lbnRDaGlsZCIsInByb2ZpbGVBZGRNb2RhbENsb3NlQnV0dG9uIiwiY2FyZFRpdGxlSW5wdXQiLCJjYXJkVXJsSW5wdXQiLCJpbWFnZU9wZW5Nb2RhbCIsInByZXZpZXdJbWFnZSIsInByZXZpZXdDYXB0aW9uIiwiaW1hZ2VSZW1vdmVCdXR0b24iLCJvcGVuTW9kYWwiLCJtb2RhbCIsImhhbmRsZUVzY2FwZSIsImNsb3NlUG9wdXAiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwidmFsaWRhdGlvblNldHRpbmdzIiwiRm9ybVZhbGlkYXRvciIsImFkZEZvcm1WYWxpZGF0b3IiLCJyZW5kZXJDYXJkIiwiY2FyZEVsZW1lbnQiLCJnZXRDYXJkRWxlbWVudCIsInByZXBlbmQiLCJrZXkiLCJoYW5kbGVPdmVybGF5Q2xpY2siLCJ0YXJnZXQiLCJjb250YWlucyIsInZhbHVlIiwidHJpbSIsInJlc2V0Il0sInNvdXJjZVJvb3QiOiIifQ==