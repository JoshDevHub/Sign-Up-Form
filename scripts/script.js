const form = document.getElementsByTagName('form')[0];
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirm-password');
const errorMessage = document.querySelector('.error');

const passwordsDoMatch = () => {
  const isNotEmptyString = (string) => string !== '';
  const [{ value: pwd }, { value: confirmPwd }] = [password, confirmPassword];
  return pwd === confirmPwd && [pwd, confirmPwd].every(isNotEmptyString);
}

const showError = () => {
  errorMessage.textContent = '* Passwords do not match.';
}

const passwordValidationHandler = () => {
  if (passwordsDoMatch()) {
    password.setCustomValidity('');
    errorMessage.textContent = '';
    errorMessage.className = 'error';
  } else {
    password.setCustomValidity('Passwords do not match');
    showError();
  }
}

password.addEventListener('input', passwordValidationHandler);
confirmPassword.addEventListener('input', passwordValidationHandler);
