
function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}

function submitForm() {
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const confirmation = document.getElementById('confirmation');
  if (!name || !email) {
    confirmation.textContent = 'Please fill in both fields.';
    confirmation.style.color = 'red';
  } else {
    confirmation.textContent = `Thanks for reaching out, ${name}!`;
    confirmation.style.color = 'green';
  }
}
