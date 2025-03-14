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

// Show success
const showSuccess = input => {
  const formControl = input.parentElement;
  formControl.classList.add('form__control--success');
};

// Check email is valid
const isValidEmail = email => {
  const re =
    /^(([^<>()[]\\.,;:\s@\"]+(\.[^<>()[]\\.,;:\s@\"]+)*)|(\".+\"))@(([[0-9]{1,3}\‌​.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

// Event listeners
form.addEventListener('submit', function (e) {
  e.preventDefault();

  if (username.value === '') {
    showError(username, 'Username is required');
  } else {
    showSuccess(username);
  }

  if (email.value === '') {
    showError(email, 'Email is required');
  } else if (!isValidEmail(email.value)) {
    showError(email, 'Email is not valid');
  } else {
    showSuccess(email);
  }

  if (password.value === '') {
    showError(password, 'Password is required');
  } else {
    showSuccess(password);
  }

  if (password2.value === '') {
    showError(password2, 'Confirm password is required');
  } else {
    showSuccess(password2);
  }
});
