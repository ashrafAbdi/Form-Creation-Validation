document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('registration-form');
    const feedbackDiv = document.getElementById('form-feedback');

    form.addEventListener('submit', function (event) {
        event.preventDefault();  // Prevent form submission for validation

        // Get input values and trim whitespace
        const username = document.getElementById('username').value.trim();
        const email = document.getElementById('email').value.trim();
        const password = document.getElementById('password').value.trim();

        let isValid = true; // Flag to track if all validations pass
        let messages = [];  // Store validation error messages

        // Username validation (must be at least 3 characters)
        if (username.length < 3) {
            isValid = false;
            messages.push("Username must be at least 3 characters long.");
        }

        // Email validation (must include '@' and '.')
        if (!email.includes('@') || !email.includes('.')) {
            isValid = false;
            messages.push("Please enter a valid email address.");
        }

        // Password validation (must be at least 8 characters long)
        if (password.length < 8) {
            isValid = false;
            messages.push("Password must be at least 8 characters long.");
        }

        // Display feedback
        feedbackDiv.style.display = 'block';  // Make feedback div visible

        if (isValid) {
            feedbackDiv.textContent = "Registration successful!";
            feedbackDiv.style.color = '#28a745';  // Green for success
        } else {
            feedbackDiv.innerHTML = messages.join('<br>');  // Display error messages
            feedbackDiv.style.color = '#dc3545';  // Red for errors
        }
    });
});
