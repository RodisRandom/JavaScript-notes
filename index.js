//rng

const button1 = document.getElementById(`button1`);
const myLabel = document.getElementById(`myLabel`);
const min = 1;
const max = 100;
let randomNumber;

button1.onclick = function(){
    randomNumber = Math.floor(Math.random() * 100) + 1;
    myLabel.textContent = randomNumber;
}


const myLabel2 = document.getElementById(`myLabel2`);
const button2 = document.getElementById(`button2`);
const button3 = document.getElementById(`button3`);
const button4 = document.getElementById(`button4`);
const button5 = document.getElementById(`button5`);
const button6 = document.getElementById(`button6`);
const button7 = document.getElementById(`button7`);
let number;

button2.onclick = function(){
    number = 0;
    myLabel2.textContent = number;
}

button3.onclick = function(){
    number = 20;
    myLabel2.textContent = number;
}

button4.onclick = function(){
    number = 40;
    myLabel2.textContent = number;
}

button5.onclick = function(){
    number = 60;
    myLabel2.textContent = number;
}

button6.onclick = function(){
    number = 80;
    myLabel2.textContent = number;
}

button7.onclick = function(){
    number = 100;
    myLabel2.textContent = number;
}

button8.onclick = function(){
    number--;
    myLabel2.textContent = number;
}

button9.onclick = function(){
    number++;
    myLabel2.textContent = number;
}