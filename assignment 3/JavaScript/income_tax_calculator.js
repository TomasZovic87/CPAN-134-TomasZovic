document.addEventListener("DOMContentLoaded", () => {
    const $ = selector => document.querySelector(selector);
    const calculateTaxButton = $("#calculateTax");
    const taxableIncomeInput = $("#taxableIncome");
    const taxOwedOutput = $("#taxOwed");

    const calculateTax = (income) => {
        if (income <= 9875) {
            return income * 0.1;
        } else if (income <= 40125) {
            return 987.5 + (income - 9875) * 0.12;
        } else if (income <= 85525) {
            return 4617.5 + (income - 40125) * 0.22;
        } else if (income <= 163300) {
            return 14605.5 + (income - 85525) * 0.24;
        } else if (income <= 207350) {
            return 33271.5 + (income - 163300) * 0.32;
        } else if (income <= 518400) {
            return 47367.5 + (income - 207350) * 0.35;
        } else {
            return 156235 + (income - 518400) * 0.37;
        }
    };

    calculateTaxButton.addEventListener("click", () => {
        const taxableIncome = parseFloat(taxableIncomeInput.value);
        if (isNaN(taxableIncome) || taxableIncome <= 0) {
            alert("Enter a valid income greater than 0.");
            taxableIncomeInput.focus();
            return;
        }
        const taxOwed = calculateTax(taxableIncome);
        taxOwedOutput.value = taxOwed.toFixed(2);
    });
});
