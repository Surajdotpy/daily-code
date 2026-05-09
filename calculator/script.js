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
       if(["+","-","*","/","%"].includes(value)){
            firstNumber = display.innerText 
            operator = value;
            isSecond = true;
            display.innerText = "";
            return;
       }
       if (value === "="){
        secondNumber = display.innerText;
        if(firstNumber === "" || secondNumber === "" || operator === ""){
            return;
        }
        const num1 = parseFloat(firstNumber)
        const num2 = parseFloat(secondNumber)
        let result = 0;

        if(operator === "+"){
            result = num1 + num2;
        } else if(operator === "-"){
            result = num1 - num2;
        } else if(operator === "*"){
            result = num1 * num2;
        } else if(operator === "/"){
            result = num1 / num2;
        } else if(operator === "%"){
            result = num1 % num2;
        }

        display.innerText = result;
       
        firstNumber = ""
        secondNumber = ""
        operator = ""
        isSecond = false;
        
       }
       display.innerText += value;

       });

      
    
});