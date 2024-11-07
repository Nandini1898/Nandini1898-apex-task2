document.getElementById('contact-form').addEventListener('submit', function (e) {
    e.preventDefault();
  
    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    // Form validation
    if (name === "" || email === "" || message === "") {
      document.getElementById('form-message').textContent = "Please fill out all fields.";
      return;
    }
  
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!emailPattern.test(email)) {
      document.getElementById('form-message').textContent = "Please enter a valid email address.";
      return;
    }
  
    document.getElementById('form-message').textContent = "Thank you for contacting us!";
    // Reset the form
    document.getElementById('contact-form').reset();
  });
  