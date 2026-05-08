const buttons = document.querySelectorAll(".btn button");
const display = document.querySelector(".display");

let firstNumber = "";
let secondNumber = "";
let operator = "";
let isSecond = false;

buttons.forEach(button => {
    button.addEventListener("click", () =>{
        const value = button.innerText;
        
        if(value === "c" || value ==="C"){
        display.innerText = "";
        firstNumber = "";
        secondNumber = "";
        operator  = "";
        isSecond = false;
        return;
       };
       if(value === "DEL"){
        display.innerText = display.innerText.slice(0, -1);
        return;
       };
       if(["+","-","*","/","%","."].includes(value)){
        return;
       }
       display.innerText += value;
       });

      
    
});