


    document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();  // Stop form submission for validation

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');

    const namePattern = /^[a-zA-Z\s]+$/;
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

    if (!namePattern.test(name)) {
        errorMessage.textContent = "Invalid name. Only letters and spaces are allowed.";
        return;
    }

    if (!emailPattern.test(email)) {
        errorMessage.textContent = "Invalid email format.";
        return;
    }

    if (!passwordPattern.test(password)) {
        errorMessage.textContent = "Password must be at least 8 characters, with at least one letter and one number.";
        return;
    }

    errorMessage.textContent = "";
    alert("Form submitted successfully!");
});