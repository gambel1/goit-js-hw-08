import throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-form-state';

const formMessageEl = document.querySelector('.feedback-form');
const inputEl = document.querySelector('.feedback-form input');

formMessageEl.addEventListener('submit', onFormSubmit);
inputEl.addEventListener('input', throttle(onInputEl, 500));

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
}


function localStorageHandleData() {
  const handleData = JSON.parse(localStorage.getItem(STORAGE_KEY));
  if (handleData) {
    inputEl.value = handleData.email;
    formMessageEl.value = handleData.message;
  }
}

localStorageHandleData();
