document.getElementById("reservation-form").addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent form submission initially
    const email = document.getElementById("email");
    const phone = document.getElementById("phone");
    const rentalType = document.getElementById("rental-type");
    const date = document.getElementById("date");
    const period = document.getElementById("period");
    const state = document.getElementById("home-state");
    let errorMessage = "";
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.value)) {
        errorMessage += "Please enter a valid email address (e.g., example@example.com).\n";
    }
    const phoneRegex = /^\(\d{3}\) \d{3}-\d{4}$/;
    if (!phoneRegex.test(phone.value)) {
        errorMessage += "Phone number must be in the format (123) 456-7890.\n";
    }
    if (!rentalType.value || !date.value || !period.value || !state.value) {
        errorMessage += "Please fill out all required fields.\n";
    }
    if (errorMessage) {
        alert(errorMessage);
    } else {
        alert("Reservation submitted successfully!");
        e.target.submit();
    }
});
