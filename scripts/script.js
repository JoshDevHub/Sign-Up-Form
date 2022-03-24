const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirm-password');
const errorMessage = document.querySelector('.error-msg');

const passwordsDoMatch = () => {
  const isNotEmptyString = (string) => string !== '';
  const [{ value: pwd }, { value: confirmPwd }] = [password, confirmPassword];
  return pwd === confirmPwd && [pwd, confirmPwd].every(isNotEmptyString);
}

const showError = () => {
  [password, confirmPassword].forEach((pwd) => pwd.classList.add('error'));
  errorMessage.textContent = '* Passwords do not match.';
}

const passwordValidationHandler = () => {
  if (passwordsDoMatch()) {
    password.setCustomValidity('');
    [password, confirmPassword].forEach((pwd) => pwd.classList.remove('error'));
    errorMessage.textContent = '';
    errorMessage.className = 'error-msg';
  } else {
    password.setCustomValidity('Passwords do not match');
    showError();
  }
}

password.addEventListener('input', passwordValidationHandler);
confirmPassword.addEventListener('input', passwordValidationHandler);
window.onload = passwordValidationHandler;
