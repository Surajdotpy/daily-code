const buttons = document.querySelectorAll(".btn button")
const display = document.querySelector(".display")

let firstNumber = "";
let secondNumber = "";
let operator = "";
let isSecond = false;

buttons.forEach(button => {
    button.addEventListener("click", ()=>{
        const value = button.innerText;
        display.innerText += value;

        if(!isNaN(value)){
            firstNumber += value;
            display.innerText = firstNumber;
        }
    })
});

