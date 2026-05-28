let body = document.body;
let red = document.querySelector("#red");
let green = document.querySelector("#green");
let blue = document.querySelector("#blue");
let reset = document.querySelector("#reset")

red.addEventListener("click", ()=>{
    body.style.backgroundColor= "red"
});

green.addEventListener("click",()=>{
    body.style.backgroundColor = "green";
});

blue.addEventListener("click", ()=>{
    body.style.backgroundColor = "blue";
});

reset.addEventListener("click", () =>{
    body.style.backgroundColor = "white";
})