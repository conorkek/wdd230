const lastEditSpan = document.getElementById("last-edit");
const lastModified = new Date(document.lastModified);
const formattedDate = lastModified.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
});
lastEditSpan.textContent = formattedDate;