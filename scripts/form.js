// Function to check password match
function checkPasswordMatch() {
    const password = document.getElementById('password');
    const confirmPassword = document.getElementById('confirm_password');
    if (password.value !== confirmPassword.value) {
        confirmPassword.setCustomValidity("Passwords do not match.");
        confirmPassword.reportValidity();
    } else {
        confirmPassword.setCustomValidity("");
    }
}

document.querySelector("form").addEventListener("submit", function (event) {
    const emailField = document.getElementById("email");
    const emailValue = emailField.value.trim(); // Ensure no extra spaces
    const emailRegex = /^[a-zA-Z0-9._%+-]+@byui\.edu$/;

    if (!emailRegex.test(emailValue)) {
        // If invalid, set custom error message and prevent form submission
        emailField.setCustomValidity("Please enter a valid @byui.edu email address.");
        emailField.reportValidity();
        event.preventDefault(); // Stop form submission
    } else {
        // If valid, clear any custom error messages
        emailField.setCustomValidity("");
    }
});

// Clear custom error when user types
document.getElementById("email").addEventListener("input", function () {
    this.setCustomValidity(""); // Clear any custom validity on input
});