document.registrationForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const {
    method,
    action,
  } = event.target;

  const body = {
    name: event.target.username.value,
    email: event.target.email.value,
    password: event.target.password.value
  }
})