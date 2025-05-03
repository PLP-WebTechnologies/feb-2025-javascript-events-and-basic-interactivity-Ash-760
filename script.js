const form = document.getElementById('contactForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');

const nameError = document.getElementById('nameError');
const emailError = document.getElementById('emailError');
const messageError = document.getElementById('messageError');
const formMessage = document.getElementById('formMessage');
const charCount = document.getElementById('charCount');

// Live character counter
messageInput.addEventListener('input', () => {
  const length = messageInput.value.length;
  charCount.textContent = `${length}/200`;
});

// Form submission
form.addEventListener('submit', function(e) {
  e.preventDefault();

  // Reset messages
  nameError.textContent = '';
  emailError.textContent = '';
  messageError.textContent = '';
  formMessage.textContent = '';

  let valid = true;

  // Validate name
  if (nameInput.value.trim() === '') {
    nameError.textContent = 'Name is required';
    valid = false;
  }

  // Validate email
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!emailPattern.test(emailInput.value.trim())) {
    emailError.textContent = 'Please enter a valid email';
    valid = false;
  }

  // Validate message
  if (messageInput.value.trim() === '') {
    messageError.textContent = 'Message cannot be empty';
    valid = false;
  }

  // Show success
  if (valid) {
    formMessage.textContent = 'Form submitted successfully!';
    form.reset();
    charCount.textContent = '0/200';
  }
});
