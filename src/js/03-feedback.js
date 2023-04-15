import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');

form.addEventListener('input', throttle(onFormData, 500));
form.addEventListener('submit', onSubmitForm);

const actualObj = JSON.parse(localStorage.getItem('feedback-form-state')) ?? '';

let formData = {
  email: actualObj.email ?? "",
  message: actualObj.message ?? ""
};

function onFormData(evt) {
  formData[evt.target.name] = evt.target.value;
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}


function onSubmitForm(evt) {
    console.log(JSON.parse(localStorage.getItem('feedback-form-state')))
    evt.preventDefault();
  evt.currentTarget.reset();
    window.localStorage.clear();
  formData = {
  email: actualObj.email ?? "",
  message: actualObj.message ?? ""
  };
 
};
    
(function dataFromLocalStorage() {
  const data = JSON.parse(localStorage.getItem('feedback-form-state'));
  const email = document.querySelector('.feedback-form input');
  const message = document.querySelector('.feedback-form textarea');
  if (data) {
    email.value = data.email;
    message.value = data.message;
  }
})();