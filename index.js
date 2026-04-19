//counter program


let username;

document.getElementById(`mySubmit`).onclick = function(){
    username = document.getElementById(`myText`).value;
    document.getElementById(`myh1`).textContent = (`Welcome, ${username}`);
}


const count = document.getElementById(`number`);
const add = document.getElementById(`Add`);
const substract = document.getElementById(`Substract`);
const button1 = document.getElementById(`button1`);
const button2 = document.getElementById(`button2`);
const button3 = document.getElementById(`button3`);
const button4 = document.getElementById(`button4`);
const button5 = document.getElementById(`button5`);
const button6 = document.getElementById(`button6`);
const button7 = document.getElementById(`button7`);
const button8 = document.getElementById(`button8`);
const button9 = document.getElementById(`button9`);
const button10 = document.getElementById(`button10`)
let value = 0;

add.onclick = function(){
    value++;
    count.textContent = value;
}

substract.onclick = function(){
    value--;
    count.textContent = value;
}

button1.onclick = function(){
    value = 10;
    count.textContent = value;
}

button2.onclick = function(){
    value = 20;
    count.textContent = value;
}

button3.onclick = function(){
    value = 30;
    count.textContent = value;
}

button4.onclick = function(){
    value = 40;
    count.textContent = value;
}

button5.onclick = function(){
    value = 50;
    count.textContent = value;
}

button6.onclick = function(){
    value = 60;
    count.textContent = value;
}

button7.onclick = function(){
    value = 70;
    count.textContent = value;
}

button8.onclick = function(){
    value = 80;
    count.textContent = value;
}

button9.onclick = function(){
    value = 90;
    count.textContent = value;
}

button10.onclick = function(){
    value = 100;
    count.textContent = value;
}