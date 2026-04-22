//rng


const myButton = document.getElementById(`myButton`);
const myLabel1 = document.getElementById(`myLabel1`);
const myLabel2 = document.getElementById(`myLabel2`);
const a = 1000;
const b = 500;
let randomNumber;
let randomNumber2;


myButton.onclick = function(){
    randomNumber = Math.floor(Math.random() * (a - b)) + b;
    randomNumber2 = Math.floor(Math.random() * (a - b)) + b;
    myLabel1.textContent = randomNumber;
    myLabel2.textContent = randomNumber2;
}