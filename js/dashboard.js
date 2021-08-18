// Function
function changeAmount(inputId) {
    // Get Previous Amount Number
    const previousAmount = document.getElementById(`${inputId}-amount`);
    const previousAmountText = previousAmount.innerText;
    const previousAmountNumber = parseFloat(previousAmountText);

    // Get New Amount Number
    const newAmount = document.getElementById(`${inputId}-input`);
    const newAmountText = newAmount.value;
    const newAmountNumber = parseFloat(newAmountText);

    if (newAmountNumber > 0) {
        // NaN Error Handling
        if (newAmountText.length != 0) {
            // Pass New Amount
            previousAmount.innerText = previousAmountNumber + newAmountNumber;

            // Clear Input Field
            newAmount.value = '';

            // Get Previous Balance
            const totalAmount = document.getElementById('total-amount');
            const totalAmountText = totalAmount.innerText;
            const totalAmountNumber = parseFloat(totalAmountText);

            // Update New Balance
            if (inputId == 'deposite') {
                totalAmount.innerText = totalAmountNumber + newAmountNumber;
            } else {
                totalAmount.innerText = totalAmountNumber - newAmountNumber;
            }
        } else {
            alert('Please Input a Number');
        }
    }
    else {
        alert('Enter a Positive Number');
    }
};

// Deposite Event
const depositeBtn = document.getElementById('deposite-button');
depositeBtn.addEventListener('click', function () {
    changeAmount('deposite');
});
// Withdraw Event 
const withdrawBtn = document.getElementById('withdraw-button');
withdrawBtn.addEventListener('click', function () {
    changeAmount('withdraw');
});