const myInput = document.getElementById(`myInput`);
const mySubmit = document.getElementById(`mySubmit`);
const myh1 = document.getElementById(`myh1`);
let message;

mySubmit.onclick = function(){

    message = myInput.value;

    if(message>=100){

        myh1.textContent = message.lastIndexOf(2);
    }

    else{
        myh1.textContent = (`you're correct: ${message}`);
    }
}