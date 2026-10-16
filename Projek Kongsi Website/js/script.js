
document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("volunteer-form");
    const message = document.getElementById("form-message");
    const nameInput = document.getElementById("volunteer-name");

    if (!form || !message || !nameInput) {
        console.error("A volunteer form element is missing!");
        return;
    }

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const name = nameInput.value.trim();

        if (name === "") {
            message.textContent = "Please enter your name.";
            message.style.backgroundColor = "#fde8e8";
            message.style.color = "#9b2226";
            nameInput.focus();
            return;
        }

        message.textContent =
            "Thank you for your interest in Projek Kongsi!";

        message.style.backgroundColor = "#e8f5e9";
        message.style.color = "#2e6b45";

        form.reset();
    });
});


