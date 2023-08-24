const screen = document.getElementById("screen");
const buttons = document.querySelectorAll("button");

let display;
buttons.forEach(button => {
    button.addEventListener('click', e => {
        display = button.textContent;
        screen.textContent += display;
    })
})