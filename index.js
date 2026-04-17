//counter program


let username;

document.getElementById(`mySubmit`).onclick = function(){
    username = document.getElementById(`myText`).value;
    document.getElementById(`myh1`).textContent = (`WELCOME, ${username}`);
}


const count = document.getElementById(`count`);
const increase = document.getElementById(`increase`);
const decrease = document.getElementById(`decrease`);
const reset = document.getElementById(`reset`);
let number = 0;

increase.onclick = function(){
    number++;
    count.textContent = number;
}

decrease.onclick = function(){
    number--;
    count.textContent = number;
}

reset.onclick = function(){
    number = 10;
    count.textContent = number;
}