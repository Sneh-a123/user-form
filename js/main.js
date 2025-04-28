const form = document.getElementById('myForm');
  const formContainer = document.getElementById('form-container');
  const thankYouMessage = document.getElementById('thankYouMessage');

  form.addEventListener('submit', function(event) {
    event.preventDefault();

    // Hide the form and show thank you
    formContainer.style.display = 'none';
    thankYouMessage.style.display = 'flex';

    // After 3 seconds, show the form again
    setTimeout(() => {
      thankYouMessage.style.display = 'none';
      formContainer.style.display = 'block';
      form.reset(); // reset form fields if you want
    }, 3000);
  });