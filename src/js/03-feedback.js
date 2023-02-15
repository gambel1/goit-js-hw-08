import throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-form-state';

const formEl = document.querySelector('.feedback-form');
const textareaEl = document.querySelector('.feedback-form textarea');

formEl.addEventListener('submit', onFormSubmit);
textareaEl.addEventListener('input', throttle(onTextareaInput, 500));

textareaSave();

function onFormSubmit(event) {
  event.preventDefault();
  event.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
}

function onTextareaInput(event) {
  const message = event.target.value;
  localStorage.setItem(STORAGE_KEY, message);
}

function textareaSave() {
  const savedMessage = localStorage.getItem(STORAGE_KEY);
  if (savedMessage) {
    textareaEl.value = savedMessage;
  }
}
