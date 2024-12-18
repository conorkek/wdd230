document.addEventListener("DOMContentLoaded", () => {
    fetch("data/rental_data.json")
        .then(response => response.json())
        .then(data => {
            const rentalsContainer = document.getElementById("rentals-container");
            data.rentals.forEach(rental => {
                const rentalDiv = document.createElement("div");
                rentalDiv.classList.add("rental-item");
                rentalDiv.innerHTML = `
                    <img src="${rental.image}" alt="${rental.type}" loading="lazy">
                    <h3>${rental.type} (${rental.cc})</h3>
                    <p>Seats: ${rental.seats} | Half Day: $${rental.half_day} | Full Day: $${rental.full_day}</p>
                `;
                rentalsContainer.appendChild(rentalDiv);
            });
        })
        .catch(error => console.error("Error loading rental data:", error));
});