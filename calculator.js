function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    if (num2 === 0) {
        return "Cannot divide by zero";
    }
    return num1 / num2;
}

// Event listeners for each operation
document.getElementById('add').addEventListener('click', function () {
    calculate(add);
});

document.getElementById('subtract').addEventListener('click', function () {
    calculate(subtract);
});

document.getElementById('multiply').addEventListener('click', function () {
    calculate(multiply);
});

document.getElementById('divide').addEventListener('click', function () {
    calculate(divide);
});

// Main calculate function
function calculate(operation) {
    const num1 = parseFloat(document.getElementById('number1').value) || 0;
    const num2 = parseFloat(document.getElementById('number2').value) || 0;

    const result = operation(num1, num2);

    document.getElementById('calculation-result').textContent = result;
}