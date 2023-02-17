import throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-form-state';

const formMessageEl = document.querySelector('.feedback-form');
// const inputEl = document.querySelector('.feedback-form input');

formMessageEl.addEventListener('submit', onFormSubmit);
formMessageEl.addEventListener('input', throttle(onInputEl, 500));

const formData = {};

function onInputEl(event) {
  formData[event.target.name] = event.target.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function onFormSubmit(event) {
  console.log(JSON.parse(localStorage.getItem(STORAGE_KEY)));
  event.preventDefault();
  event.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
  formData.email = '';
  formData.message = '';
}

function localStorageHandleData() {
  const handleData = JSON.parse(localStorage.getItem(STORAGE_KEY));
  if (handleData) {
    formMessageEl.elements.email.value = formData.email = handleData?.email;
    formMessageEl.elements.message.value = formData.message =
      handleData?.message;
  }
}

localStorageHandleData();
