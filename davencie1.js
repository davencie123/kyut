// Data array
 const users = [
    { username: "Mermo", password: "Meow" },
    { username: "Yes", password: "King" },
    // Add more users as needed
  ];

  function validate() {
    const enteredUsername = document.getElementById('username').value;
    const enteredPassword = document.getElementById('password').value;

    // Check if entered credentials match any user
    const isValidUser = users.some(user => user.username === enteredUsername && user.password === enteredPassword);

    if (isValidUser) {
        // Redirect to another HTML file upon successful login
        window.location.href = "http://127.0.0.1:5500/Main.html";
        alert('Login successful! Welcome ' + enteredUsername);
      } else {
        alert('Login failed');
      }
  }

  function register() {
    // Get user registration data from input fields
    const fullName = document.getElementById('fullName').value;
    const email = document.getElementById('email').value;
    const registerPassword = document.getElementById('registerPassword').value;

    // Add the new user to the array
    users.push({ username: fullName, password: registerPassword });

    alert('Registration successful. You can now login with your credentials.');
    
    // Optionally, you can automatically switch to the login form after registration
    showLoginForm();
  }

  function showRegisterForm() {
    document.getElementById("registrationForm").style.display = "block";
    document.querySelector("form").style.display = "none";
  }

  function showLoginForm() {
    document.getElementById("registrationForm").style.display = "none";
    document.querySelector("form").style.display = "block";
  }

function showRegisterForm() {
    document.getElementById("registrationForm").style.display = "block";
    document.querySelector("form").style.display = "none";
  }

  function showLoginForm() {
    document.getElementById("registrationForm").style.display = "none";
    document.querySelector("form").style.display = "block";
  }
