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

const screenCurrent = document.getElementById("screenCurrent");
const screenLast = document.getElementById("screenLast");
const buttons = document.querySelectorAll("button");
const pointBtn = document.getElementById("pointBtn");

let display;
let clicked;
let result;

// Remember to round results so it doesn't overflow
buttons.forEach(button => {
    button.addEventListener('click', e => {
        display = button.textContent;
        clicked = button.value;
        if (clicked == "=") {
            if (operator != null && number2 != null && number1 != null) {
                if (screenLast.textContent.includes("=")) {
                    screenLast.textContent = "";
                }
                result = operate(Number(number1), operator, Number(number2));
                result = Math.round(result * 1000) / 1000;
                screenLast.textContent = screenLast.textContent + screenCurrent.textContent + "=";
                screenCurrent.textContent = result;
                operator = null;
                number1 = result;
                number2 = null;
                pointBtn.removeAttribute("disabled");
            }
        } else if (clicked == "C") {
            operator = null;
            number1 = null;
            operator = null;
            number2 = null;
            screenCurrent.textContent = '';
            screenLast.textContent = '';
        } else if (!isNaN(clicked) || clicked == ".") {
            if (operator == null) {
                (number1 == null) ? (number1 = clicked) : (clicked == ".") ? (number1 += clicked, pointBtn.setAttribute('disabled', '')) : (number1 += clicked); 
            } else {
                (number2 == null) ? (number2 = clicked) : (clicked == ".") ? (number2 += clicked, pointBtn.setAttribute('disabled', '')) : (number2 += clicked); 
            }
        } else {
            if (number1 != null && number2 != null) {
                result = operate(Number(number1), operator, Number(number2));
                result = Math.round(result * 1000) / 1000;
                screenCurrent.textContent = "";
                screenLast.textContent = result + display;
                display = '';
                number1 = result;
                number2 = null;
            }
            
            operator = clicked;
            pointBtn.removeAttribute("disabled");
        } 

        if (display != "=" && display != "CLEAR" && display != "DELETE") {
            screenCurrent.textContent += display;
        }
    });
});
