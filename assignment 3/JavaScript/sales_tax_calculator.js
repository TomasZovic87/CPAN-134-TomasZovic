document.addEventListener("DOMContentLoaded", () => {
    const $ = selector => document.querySelector(selector);
    const calculateButton = $("#calculate");
    const clearButton = $("#clear");
    const subtotalInput = $("#subtotal");
    const taxRateInput = $("#taxRate");
    const salesTaxOutput = $("#salesTax");
    const totalOutput = $("#total");

    const validateInputs = () => {
        const subtotal = parseFloat(subtotalInput.value);
        const taxRate = parseFloat(taxRateInput.value);
        if (isNaN(subtotal) || subtotal <= 0 || subtotal >= 10000) {
            alert("Subtotal must be > 0 and < 10000.");
            subtotalInput.focus();
            return false;
        }
        if (isNaN(taxRate) || taxRate <= 0 || taxRate >= 12) {
            alert("Tax Rate must be > 0 and < 12.");
            taxRateInput.focus();
            return false;
        }
        return { subtotal, taxRate };
    };

    calculateButton.addEventListener("click", () => {
        const inputs = validateInputs();
        if (!inputs) return;

        const { subtotal, taxRate } = inputs;
        const salesTax = (subtotal * taxRate) / 100;
        const total = subtotal + salesTax;

        salesTaxOutput.value = salesTax.toFixed(2);
        totalOutput.value = total.toFixed(2);
    });

    clearButton.addEventListener("click", () => {
        subtotalInput.value = "";
        taxRateInput.value = "";
        salesTaxOutput.value = "";
        totalOutput.value = "";
        subtotalInput.focus();
    });

    subtotalInput.addEventListener("click", () => subtotalInput.value = "");
    taxRateInput.addEventListener("click", () => taxRateInput.value = "");
});
