import throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-form-state';
const formData = {
  email: '',
  message: '',
};
const form = document.querySelector('.feedback-form');

form.addEventListener('submit', onFormSubmit);
form.addEventListener('input', throttle(onFormInput, 500));
populateInput();

function onFormSubmit(evt) {
  evt.preventDefault();

  console.log(formData);
  evt.target.reset();
  localStorage.removeItem(STORAGE_KEY);
}
function onFormInput(evt) {
  formData[evt.target.name] = evt.target.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}
function populateInput() {
  let savedMessage = localStorage.getItem(STORAGE_KEY);
  if (savedMessage) {
    savedMessage = JSON.parse(savedMessage);
    Object.entries(savedMessage).forEach(([name, value]) => {
      form.elements[name].value = value;
    });
  }
}
