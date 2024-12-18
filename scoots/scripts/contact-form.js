document.getElementById("contact-form").addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent default form submission

    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const comment = document.getElementById("comment");

    let errorMessage = "";

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.value)) {
        errorMessage += "Please enter a valid email address (e.g., example@example.com).\n";
    }

    // Required fields check
    if (!name.value || !email.value || !comment.value) {
        errorMessage += "Please fill out all required fields.\n";
    }

    // Display error or success message
    if (errorMessage) {
        alert(errorMessage); // Show error messages
    } else {
        alert("Your message has been sent successfully!");
        e.target.submit(); // Allow form submission
    }
});