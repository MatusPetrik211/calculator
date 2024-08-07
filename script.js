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



function getValues() {
    let num1 = 0;
    let num2 = 0;
    let operator = '';
    let result = 0;

    const numbers = document.querySelectorAll('.number');
    const symbols = document.querySelectorAll('.symbol');
    const display = document.querySelector('.display');
    const clearAll = document.querySelector('.clear-all');
    const clear = document.querySelector('.clear');

    clearAll.addEventListener('click', () => {
        display.textContent = '';
        num1 = 0;
        num2 = 0;
        operator = '';
    })

    clear.addEventListener('click', () => {
        let displayText = display.textContent;
        let deleteOne = displayText.slice(0, displayText.length - 1);
        display.textContent = deleteOne;
    })


    numbers.forEach((num) => {
        num.addEventListener('click',() => {
            console.log(num.textContent);
            display.textContent += num.textContent;
        })
    })

    symbols.forEach((symbol) => {
        symbol.addEventListener('click',() => {
            console.log(symbol.textContent);
            display.textContent = '';
            display.textContent = symbol.textContent;
        })
    })


}

getValues();

function operate(operator, a, b) {
    switch(operator) {
        case '+': add(a, b); break;
        case '-': subtract(a, b); break;
        case '*': multiply(a, b); break;
        case '/': divide(a, b); break;
        case '%': remainder(a, b); break;
    }
}


