import throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-form-state';

const formEl = document.querySelector('.feedback-form');
const inputEl = document.querySelector('input');

const formData = {};

const parsedMessage = JSON.parse(savedMessage);

populateHandleInput();

formEl.addEventListener('submit', onFormSubmit);
inputEl.addEventListener('input', throttle(onInputEl, 500));

function onInputEl(event) {
  formData[event.target.name] = event.target.value;
}

const savedMessage = localStorage.getItem(
  STORAGE_KEY,
  JSON.stringify(formData)
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

function populateHandleInput() {
  if (load(STORAGE_KEY)) {
    const outputForm = load(STORAGE_KEY);
    const formKeys = Object.keys(outputForm);
    formKeys.map(element => {
      document.querySelector(`[name='${element}]`).value = outputForm[element];
    });
  }
}
