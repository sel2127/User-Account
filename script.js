// Get references to the login button and forgot password link
const loginButton = document.getElementById('loginButton');
const forgotPasswordLink = document.getElementById('forgotPasswordLink');

// Add event listeners
loginButton.addEventListener('click', function() {
  // Get the values from the input fields
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  // Perform login authentication or other actions
  // For example, you can display a success message or redirect the user to another page
  console.log('Login button clicked');
  console.log('Username:', username);
  console.log('Password:', password);
});

forgotPasswordLink.addEventListener('click', function(event) {
  event.preventDefault(); // Prevent the default link behavior (navigating to another page)
  
  // Perform some actions when the forgot password link is clicked
  // For example, you can display a modal or redirect the user to a forgot password page
  console.log('Forgot password link clicked');
});


// Get a reference to the register button
const registerButton = document.getElementById('registerButton');

// Add an event listener to the button
registerButton.addEventListener('click', function() {
  // Get the values from the input fields
  const username = document.getElementById('username').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  // Perform some actions with the values
  // For example, you can display them in the console
  console.log('Username:', username);
  console.log('Email:', email);
  console.log('Password:', password);

  // You can also perform other tasks like sending data to a server or validating the form
});



// Get a reference to the reset password button
const resetPasswordButton = document.getElementById('resetPasswordButton');

// Add an event listener to the button
resetPasswordButton.addEventListener('click', function() {
  // Get the value from the email input field
  const email = document.getElementById('email').value;

  // Perform some actions with the email value
  // For example, you can display it in an alert
  alert('Reset password requested for email: ' + email);

  // You can also perform other tasks like sending a reset password email or validating the email
});