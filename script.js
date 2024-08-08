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

function operate(operator, a, b) {
    switch(operator) {
        case '+': return(add(a, b)).toFixed(3); 
        case '-': return(subtract(a, b)).toFixed(3);
        case '×': return(multiply(a, b)).toFixed(3);
        case '÷': return(divide(a, b)).toFixed(3); 
        case '%': return(remainder(a, b)).toFixed(3);
    }
}

function checkBool(bool) {
    if(bool) {
        return true;
    }
    else if(!bool) {
        return false;
    }
}


function getValues() {
    let num1 = 0;
    let num2 = 0;
    let operator = '';
    let count = 0;

    const numbers = document.querySelectorAll('.number');
    const symbols = document.querySelectorAll('.symbol');
    const display = document.querySelector('.display');
    const clearAll = document.querySelector('.clear-all');
    const clear = document.querySelector('.clear');
    const equal = document.querySelector('.equal');

    clearAll.addEventListener('click', () => {
        display.textContent = '';
        num1 = 0;
        num2 = 0;
        count = 0;
        operator = '';
    })

    clear.addEventListener('click', () => {
        let displayText = display.textContent;
        let deleteOne = displayText.slice(0, displayText.length - 1);
        display.textContent = deleteOne;
    })


    numbers.forEach((num) => {
        num.addEventListener('click',() => {
            let dis = display.textContent;
            display.textContent += num.textContent;
            if(dis.includes('+') || dis.includes('-') || dis.includes('×') 
            || dis.includes('÷') || dis.includes('%')) {
                num2 = display.textContent.slice(1, display.textContent.length);   
            }
            else {
                num1 = display.textContent;
            }
            console.log(`num1: ${num1}, num2: ${num2}`);
        })
    })
      

    symbols.forEach((symbol) => {
        symbol.addEventListener('click',() => {
            let dis = display.textContent;
            console.log(dis);
            if(dis.includes('+') || (dis.includes('-') && +num1 > 0) || dis.includes('×') 
                || dis.includes('÷') || dis.includes('%')) {
                    display.textContent = operate(operator, +num1, +num2);
                    num1 = operate(operator, +num1, +num2);
                    display.textContent = '';
                    operator = symbol.textContent;
                    display.textContent += operator;
                }
            else if(num1 !== 0 && num1 !== null) {
                display.textContent = '';
                operator = symbol.textContent;
                display.textContent += operator;
            }
        })  
    })

    equal.addEventListener('click', () => {
        display.textContent = operate(operator, +num1, +num2);
        num1 = operate(operator, +num1, +num2);
    })

}

getValues();



