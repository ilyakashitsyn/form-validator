'strict mode';

const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const confirmPass = document.getElementById('confirm-pass');

// Show input error message
const showError = (input, message) => {
  const formControl = input.parentElement;
  formControl.classList.remove('form__control--success');
  formControl.classList.add('form__control--error');

  const error = formControl.querySelector('.form__error');
  error.textContent = message;
  error.classList.add('form__error--visible');
};

// Show success
const showSuccess = input => {
  const formControl = input.parentElement;
  formControl.classList.remove('form__control--error');
  formControl.classList.add('form__control--success');

  const error = formControl.querySelector('.form__error');
  if (error) {
    error.classList.remove('form__error--visible');
  }
};

// Check email is valid
const checkEmail = input => {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3})|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (re.test(input.value.trim())) {
    showSuccess(input);
  } else {
    showError(input, 'Email is not valid');
  }
};

// Check passwords match
const checkPasswordMatch = (input1, input2) => {
  if (input1.value !== input2.value) {
    showError(input2, 'Password do not match');
  }
};

// Check required fields
const checkRequired = inputArr => {
  inputArr.forEach(input => {
    if (input.value.trim() === '') {
      showError(input, `${getFieldName(input)} is required`);
    } else {
      showSuccess(input);
    }
  });
};

// Get field name
const getFieldName = input => {
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
};

// Check input length
const checkLength = (input, min, max) => {
  if (input.value.length < min) {
    showError(
      input,
      `${getFieldName(input)} must be at least ${min} characters`
    );
  } else if (input.value.length > max) {
    showError(
      input,
      `${getFieldName(input)} must be less than ${max} characters`
    );
  } else {
    showSuccess(input);
  }
};

// Event listeners
// form.addEventListener('submit', function (e) {
//   e.preventDefault();

//   if (username.value === '') {
//     showError(username, 'Username is required');
//   } else {
//     showSuccess(username);
//   }

//   if (email.value === '') {
//     showError(email, 'Email is required');
//   } else if (!isValidEmail(email.value)) {
//     showError(email, 'Email is not valid');
//   } else {
//     showSuccess(email);
//   }

//   if (password.value === '') {
//     showError(password, 'Password is required');
//   } else {
//     showSuccess(password);
//   }

//   if (confirmPass.value === '') {
//     showError(confirmPass, 'Confirm password is required');
//   } else {
//     showSuccess(confirmPass);
//   }
// });

form.addEventListener('submit', function (e) {
  e.preventDefault();

  checkRequired([username, email, password, confirmPass]);
  checkLength(username, 3, 15);
  checkLength(password, 6, 25);
  checkEmail(email);
  checkPasswordMatch(password, confirmPass);
});
