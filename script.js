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
            console.log(add(number1, number2));
            break;
        case "-":
            console.log(subtract(number1, number2));
            break;
        case "*":
            console.log(multiply(number1, number2));
            break;
        case "/":
            console.log(divide(number1, number2));
            break;
    }
}

let number1, operator, number2;
const screen = document.getElementById("screen");
const buttons = document.querySelectorAll("button");

let display;
buttons.forEach(button => {
    button.addEventListener('click', e => {
        display = button.textContent;
        screen.textContent += display;
    })
})
