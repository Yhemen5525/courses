// Get the email and password input fields and their corresponding error elements
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const emailError = document.getElementById('emailError');
const passwordError = document.getElementById('passwordError');
const loginForm = document.getElementById('loginForm');
const loginBtn = document.getElementById('login-btn');


// Add event listeners for the "blur" event on the email and password input fields
emailInput.addEventListener('blur', validateEmail);
passwordInput.addEventListener('blur', validatePassword);

// Validation functions
function validateEmail() {
   const emailValue = emailInput.value;
   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
   if (!emailRegex.test(emailValue)) {
      emailInput.style.borderColor = 'red';
      emailError.textContent = 'Please enter a valid email address.';
      return false;
   } else {
      emailInput.style.borderColor = '';
      emailError.textContent = '';
      return true;
   }
}

function validatePassword() {
   const passwordValue = passwordInput.value;
   if (passwordValue.length < 5) {
      passwordInput.style.borderColor = 'red';
      passwordError.textContent = 'Password must be at least 5 characters long.';
      return false;
   } else {
      passwordInput.style.borderColor = '';
      passwordError.textContent = '';
      return true;
   }
}

// Add event listener for the form's "submit" event
loginForm.addEventListener('submit', (event) => {
   // Prevent the form from submitting by default
   event.preventDefault();


   // Check whether both inputs passed validation
   const emailValid = validateEmail();
   const passwordValid = validatePassword();
   if (emailValid && passwordValid) {
      // Log the email and password
      const email = emailInput.value;
      const password = passwordInput.value;
      console.log('Email:', email);
      console.log('Password:', password);

      // Create an object with the email and password
      const formData = {
         email,
         password
      };
      console.log('Form data:', formData);


      loginBtn.innerHTML = "Please wait";

      // Send the login data as JSON in the request body
      fetch('https://courses.the1000men.repl.co/login', {
   method: 'POST',
   headers: {
      'Content-Type': 'application/json'
   },
   body: JSON.stringify(formData)
})
.then(response => {
   if (response.ok) {
      // If login is successful, log the response data
      return response.json();
   } else {
      // If login is unsuccessful, display an error message
      throw new Error('Email or Password is incorrect');
   }
})
.then(data => {
  console.log(data);
  // Save the user data to local storage
  localStorage.setItem('userData', JSON.stringify(data.user));
  localStorage.setItem("chart", JSON.stringify(data.user.chart));
  // Do something with the response data here
  window.location.href = './index.html';
})
.catch(error => {
   console.error(error);
   // Display an error message to the user
   showError(error.message);
})
.finally(() => {
   // Reset the text of the login button to its initial value
   loginBtn.textContent = 'Login';
});


   }
});
