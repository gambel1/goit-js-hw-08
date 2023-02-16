import throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-form-state';

const formEl = document.querySelector('.feedback-form');
const inputEl = document.querySelector('input');
const textareaEl = document.querySelector('.feedback-form textarea');

formEl.addEventListener('submit', onFormSubmit);
inputEl.addEventListener('input', throttle(onInputEl, 500));

const formData = {};

function onInputEl(event) {
  formData[event.target.name] = event.target.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function onFormSubmit(event) {
  event.preventDefault();
  event.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
  console.log(JSON.parse(localStorage.getItem(STORAGE_KEY)));
}

localStorageHandleData();

function localStorageHandleData() {
  const handleData = JSON.parse(localStorage.getItem(STORAGE_KEY));
  if (handleData) {
    inputEl.value = handleData.email;
    textareaEl.value = handleData.message;
  }
}
