import throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-form-state';

const formEl = document.querySelector('.feedback-form');
const inputEl = document.querySelector('input');

const formData = {};

const parsedMessage = JSONE.parse(savedMessage);

formEl.addEventListener('submit', onFormSubmit);
inputEl.addEventListener('input', throttle(onInputEl, 500));

function onInputEl(event) {
  formData[event.target.name] = event.target.value;
}

const savedMessage = localStorage.getItem(
  STORAGE_KEY,
  JSONE.stringify(formData)
);

function onFormSubmit(event) {
  event.preventDefault();
  event.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
}

function onInputEl(event) {
  const message = event.target.value;
  localStorage.setItem(STORAGE_KEY, message);
}
