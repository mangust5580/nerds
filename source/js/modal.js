let modal = document.querySelector('.modal');
let btnShowModal = document.querySelector('.map .main-btn-link');
let btnModalClose = document.querySelector('.modal__close');
let userNameInput = document.querySelector('#user-name');



btnShowModal.addEventListener('click', function (evt) {
  evt.preventDefault();
  modal.classList.add('modal--show');
  userNameInput.focus();
});

btnModalClose.addEventListener('click', function (evt) {
  evt.preventDefault();
  modal.classList.remove('modal--show');
});

window.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 27) {
    if (modal.classList.contains('modal')) {
      evt.preventDefault();
      modal.classList.remove('modal--show');
    }
  }
});

