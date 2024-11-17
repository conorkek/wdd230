document.addEventListener("DOMContentLoaded", () => {
    const membersContainer = document.getElementById("members-container");
    const gridViewButton = document.getElementById("grid-view");
    const listViewButton = document.getElementById("list-view");

    // Fetch and render member data
    fetch("../data/members.json")
        .then(response => response.json())
        .then(members => {
            renderMembers(members, "grid"); // Default to grid view
        })
        .catch(error => console.error("Error loading members:", error));

    // Event listeners for view toggle
    gridViewButton.addEventListener("click", () => {
        fetch("../data/members.json")
            .then(response => response.json())
            .then(members => {
                renderMembers(members, "grid");
            });
    });

    listViewButton.addEventListener("click", () => {
        fetch("../data/members.json")
            .then(response => response.json())
            .then(members => {
                renderMembers(members, "list");
            });
    });

    // Render members based on view type
    function renderMembers(members, view) {
        membersContainer.className = view === "grid" ? "grid" : "list";
        membersContainer.innerHTML = ""; // Clear previous content

        members.forEach(member => {
            const memberCard = document.createElement("div");
            memberCard.classList.add("member-card");

            memberCard.innerHTML = `
                <img src="images/${member.image}" alt="${member.name}">
                <h3>${member.name}</h3>
                <p>${member.address}</p>
                <p>${member.phone}</p>
                <a href="${member.website}" target="_blank">Visit Website</a>
                <p><strong>Membership Level:</strong> ${member.membershipLevel}</p>
            `;

            membersContainer.appendChild(memberCard);
        });
    }
});
