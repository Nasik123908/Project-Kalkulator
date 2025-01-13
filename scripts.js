let display = document.getElementById('display');
let currentOperation = '';
let firstOperand = '';
let secondOperand = '';
let shouldResetDisplay = false;

function appendNumber(number) {
    if (shouldResetDisplay) {
        display.value = '';
        shouldResetDisplay = false;
    }
    display.value += number;
}

function operation(operator) {
    if (currentOperation !== '') {
        calculateResult();
    }
    firstOperand = display.value;
    currentOperation = operator;
    shouldResetDisplay = true;
}

function calculateResult() {
    if (currentOperation === '') return;
    secondOperand = display.value;
    let result;
    switch (currentOperation) {
        case '+':
            result = parseFloat(firstOperand) + parseFloat(secondOperand);
            break;
        case '-':
            result = parseFloat(firstOperand) - parseFloat(secondOperand);
            break;
        case '*':
            result = parseFloat(firstOperand) * parseFloat(secondOperand);
            break;
        case '/':
            result = parseFloat(firstOperand) / parseFloat(secondOperand);
            break;
        default:
            return;
    }
    display.value = result;
    currentOperation = '';
}

function clearDisplay() {
    display.value = '';
    currentOperation = '';
    firstOperand = '';
    secondOperand = '';
}
