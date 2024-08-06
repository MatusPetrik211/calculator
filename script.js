function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function remainder(a, b) {
    return a % b;
}

let num1 = 0;
let num2 = 0;
let operator = '';

function operate(operator, a, b) {
    switch(operator) {
        case '+': add(a, b); break;
        case '-': subtract(a, b); break;
        case '*': multiply(a, b); break;
        case '/': divide(a, b); break;
        case '%': remainder(a, b); break;
    }
}


