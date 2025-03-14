'strict mode';

const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const confirmPass = document.getElementById('confirm-pass');

// Show input error message
const showError = (input, message) => {
  const formControl = input.parentElement;
  formControl.classList.add('form__control--error');
  const error = formControl.querySelector('.form__error');
  error.textContent = message;
  error.classList.add('form__error--visible');
};

// Event listeners
form.addEventListener('submit', function (e) {
  e.preventDefault();

  if (username.value === '') {
    showError(username, 'Username is required');
  } else {
    showSuccess(username);
  }
});
