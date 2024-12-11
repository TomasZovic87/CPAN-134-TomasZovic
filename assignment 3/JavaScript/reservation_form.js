document.addEventListener("DOMContentLoaded", () => {
    const $ = selector => document.querySelector(selector);
    const reservationForm = $("#reservationForm");

    reservationForm.addEventListener("submit", (event) => {
        const arrivalDate = $("#arrivalDate").value.trim();
        const nights = parseInt($("#nights").value.trim(), 10);
        const adults = parseInt($("#adults").value.trim(), 10);
        const children = parseInt($("#children").value.trim(), 10);
        const email = $("#email").value.trim();
        const phone = $("#phone").value.trim();

        const emailPattern = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;

        if (!arrivalDate || isNaN(nights) || nights <= 0 || isNaN(adults) || adults <= 0 ||
            email === "" || !emailPattern.test(email) || phone === "") {
            alert("Please complete all fields with valid information.");
            event.preventDefault();
        }
    });
});
