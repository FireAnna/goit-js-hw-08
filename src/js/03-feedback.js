import throttle from 'lodash.throttle';

const storageKey = 'feedback-form-state';
const inputData = {};
const form = document.querySelector('form');
const storageData = JSON.parse(localStorage.getItem(storageKey));

for (const item in storageData) {
  form[item].value = storageData[item];
}

const onInput = function (e) {
  const { name, value } = e.target;
  inputData[name] = value;
  localStorage.setItem(storageKey, JSON.stringify(inputData));
};

form.addEventListener('input', throttle(onInput, 500));
form.addEventListener('submit', e => {
  e.preventDefault();
  console.log(inputData);
  for (const item in inputData) {
    delete inputData[item];
  }
  e.currentTarget.reset();

  localStorage.removeItem(storageKey);
});
