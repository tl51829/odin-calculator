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

function operate(number1, operator, number2) {
    switch (operator) {
        case "+":
            return add(number1, number2);
        case "-":
            return subtract(number1, number2);
        case "*":
            return multiply(number1, number2);
        case "/":
            return divide(number1, number2);
    }
}

let number1 = null;
let operator = null;
let number2 = null;

const screen = document.getElementById("screen");
const buttons = document.querySelectorAll("button");

let display;
let clicked;
let result;

// Remember to round results so it doesn't overflow
buttons.forEach(button => {
    button.addEventListener('click', e => {
        clicked = button.value;
        if (clicked == "=") {
            if (operator != null && number2 != null && number1 != null) {
                result = operate(Number(number1), operator, Number(number2));
                screen.textContent += "=" + result;
                operator = null;
                number1 = result;
                number2 = null;
            }
        } else if (clicked == "D") {
            
        } else if (clicked == "C") {
            
        } else if (!isNaN(clicked) || clicked == ".") {
            if (operator == null) {
                (number1 == null) ? (number1 = clicked) : (number1 += clicked); 
            } else {
                (number2 == null) ? (number2 = clicked) : (number2 += clicked);          
            }
        } else {
            if (number1 != null && number2 != null) {
                result = operate(Number(number1), operator, Number(number2));
                screen.textContent += '=' + result;
                number1 = result;
                number2 = null;
            }
            operator = clicked;
        } 

        display = button.textContent;
        if (display != "=") {
            screen.textContent += display;
        }
    });
});
