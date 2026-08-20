const form = document.querySelector(".contact-form");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    alert("Message sent successfully!");
});
