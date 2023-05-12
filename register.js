//image preview
const fileInput = document.getElementById('profile-image');
const previewImg = document.getElementById('preview-image');

fileInput.addEventListener('change', function() {
    const file = this.files[0];
    if (file) {
        const reader = new FileReader();
        reader.addEventListener('load', function() {
            previewImg.setAttribute('src', this.result);
        });
        reader.readAsDataURL(file);
    } else {
        previewImg.setAttribute('src', '#');
    }
});

const form = document.querySelector('.registration-form');
const usernameInput = document.querySelector('#username');
const emailInput = document.querySelector('#email');
const profileImageInput = document.querySelector('#profile-image');
const registerBtn = document.querySelector('#register-btn');

function sendFormData(formData) {
  console.log(formData); // add this line
  registerBtn.disabled = true;
  registerBtn.textContent = "Registering...";
  const formDataToSend = new FormData();
  for (let key in formData) {
    if (key === 'profile-image') {
      formDataToSend.append(key, fileInput.files[0]);
    } else {
      formDataToSend.append(key, formData[key]);
    }
  }
  fetch('https://courses.the1000men.repl.co/register', {
    method: 'POST',
    body: formDataToSend,
  })
    .then(response => response.text())
    .then(data => {
      console.log("consoling data")
      console.log(data);
      const parsedData = JSON.parse(data);
      console.log(parsedData.success);
      //save data to localstrage with key "user"
      localStorage.setItem('userData', JSON.stringify(formData));
      
     
         if(parsedData.success == true){
         	window.location.href = "./login.html";
         }else{
            const {message} = parsedData;
            alert(message);
         }
        
    
    })
    .catch(error => alert(error))
    .finally(() => {
      registerBtn.disabled = false;
      registerBtn.textContent = "Register";
    });
}






form.addEventListener('submit', (event) => {
  event.preventDefault();
  const isValid = validateForm();
  if (isValid) {
    const formData = getFormData();
    sendFormData(formData);
  }
});


usernameInput.addEventListener('input', () => {
  validateUsername();
});

emailInput.addEventListener('input', () => {
  validateEmail();
});

profileImageInput.addEventListener('input', () => {
  validateProfileImage();
});

function validateForm() {
  let isValid = true;
  if (!validateUsername()) {
    isValid = false;
  }
  if (!validateEmail()) {
    isValid = false;
  }
  if (!validateProfileImage()) {
    isValid = false;
  }
  return isValid;
}

function validateUsername() {
  const usernameValue = usernameInput.value.trim();
  if (usernameValue === '') {
    showError(usernameInput, 'Username is required');
    return false;
  } else if (usernameValue.length < 3) {
    showError(usernameInput, 'Username must be at least 3 characters long');
    return false;
  } else {
    showSuccess(usernameInput);
    return true;
  }
}

function validateEmail() {
  const emailValue = emailInput.value.trim();
  const emailRegex = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
  if (emailValue === '') {
    showError(emailInput, 'Email is required');
    return false;
  } else if (!emailRegex.test(emailValue)) {
    showError(emailInput, 'Email is invalid');
    return false;
  } else {
    showSuccess(emailInput);
    return true;
  }
}

function validateProfileImage() {
  const profileImageValue = profileImageInput.value.trim();
  if (profileImageValue === '') {
    showError(profileImageInput, 'Profile image is required');
    return false;
  } else {
    showSuccess(profileImageInput);
    return true;
  }
}

function showError(input, message) {
  const formControl = input.parentElement;
  formControl.className = 'input-container error';
  const errorMessage = formControl.querySelector('label');
  errorMessage.textContent = message;
  errorMessage.style.color = 'red';
}

function showSuccess(input) {
  const formControl = input.parentElement;
  formControl.className = 'input-container success';
  const errorMessage = formControl.querySelector('label');
  errorMessage.textContent = '';
}

function getFormData() {
  const form = document.querySelector('.registration-form');
  const formData = {};

  form.querySelectorAll('input').forEach((input) => {
    // Sanitize input by removing white spaces
    const sanitizedValue = input.value.trim();
    formData[input.id] = sanitizedValue;
  });

  // Initialize chart as an empty array
  formData.chart = [];

  return formData;
}


function togglePassword() {
			var password = document.getElementById("password");
			if (password.type === "password") {
				password.type = "text";
			} else {
				password.type = "password";
			}
}
