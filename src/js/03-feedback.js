import throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-form-state';

const formEl = document.querySelector('.feedback-form');
const inputEl = document.querySelector('input');

const formData = {};

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
// const parsedMessage = JSON.parse(savedMessage);

function onFormSubmit(event) {
  event.preventDefault();
  event.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
}

function onInputEl(event) {
  const message = event.target.value;
  localStorage.setItem(STORAGE_KEY, message);
}

function load(key) {
  try {
    const serializedState = localStorage.getItem(key);
    return serializedState === null ? undefined : JSON.parse(serializedState);
  } catch (error) {
    console.log(error.name);
  }
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
