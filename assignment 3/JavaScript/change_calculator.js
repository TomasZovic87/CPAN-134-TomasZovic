document.addEventListener("DOMContentLoaded", () => {
    const $ = selector => document.querySelector(selector);
    const makeChangeButton = $("#makeChange");
    const changeDueInput = $("#changeDue");
    const quartersOutput = $("#quarters");
    const dimesOutput = $("#dimes");
    const nickelsOutput = $("#nickels");
    const penniesOutput = $("#pennies");

    makeChangeButton.addEventListener("click", () => {
        const changeDue = parseInt(changeDueInput.value, 10);
        if (isNaN(changeDue) || changeDue < 0 || changeDue > 99) {
            alert("Enter a valid number between 0 and 99.");
            changeDueInput.focus();
            return;
        }

        const quarters = Math.floor(changeDue / 25);
        const dimes = Math.floor((changeDue % 25) / 10);
        const nickels = Math.floor((changeDue % 10) / 5);
        const pennies = changeDue % 5;

        quartersOutput.value = quarters;
        dimesOutput.value = dimes;
        nickelsOutput.value = nickels;
        penniesOutput.value = pennies;
    });
});
