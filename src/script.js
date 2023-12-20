const nameError = document.getElementById('name-error');
const emailError = document.getElementById('email-error');
const phoneError = document.getElementById('phone-error');
const messageError = document.getElementById('message-error');
const submitError = document.getElementById('submit-error');

function validateName() {
  let name = document.getElementById('contact-name').value;
  if (name.length == 0) {
    nameError.innerHTML = 'Name is required';
    return false;
  }
  if (!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {
    nameError.innerHTML = 'Name is required';
    return false;
  }
  nameError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
  return true;
}

function validatePhone() {
  let phone = document.getElementById('contact-phone').value;
  if (phone.length == 0) {
    phoneError.innerHTML = 'phone no is required';
    return false;
  }
  if (!phone.length == 10) {
    phoneError.innerHTML = 'phone no should be 10 digits';
    return false;
  }

  if (!phone.match(/^[0-9]{10}]$/)) {
    phoneError.innerHTML = 'only digits please';
    return false;
  }
  phoneError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
  return true;
}

function validateEmail() {
  let email = document.getElementById('contact-email').value;

  if (email.length == 0) {
    emailError.innerHTML = 'email required';
    return false;
  }
  if (
    !email.match(
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    )
  ) {
    emailError.innerHTML = 'Email invalid';
    return false;
  }
  emailError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
  return true;
}
function validateMessage() {
  let message = document.getElementById('contact-message').value;
  let required = 30;
  let left = required - message.length;

  if (left > 0) {
    messageError.innerHTML = left + 'more characters required';
    return false;
  }
  messageError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
  return true;
}

function validateForm() {
  if (
    !validateEmail() ||
    !validateName() ||
    !validatePhone() ||
    !validateMessage()
  ) {
    submitError.style.opacity = 1;
    submitError.innerHTML = 'please fix error to submit';
    setTimeout(function () {
      submitError.style.opacity = 0;
    }, 3000);
  }
}
