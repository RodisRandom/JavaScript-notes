//logical operations

const p1 = document.getElementById(`p1`);
const mySubmit = document.getElementById(`mySubmit`);
const myInput = document.getElementById(`myInput`);
let age;
let message;

mySubmit.onclick = function(){

    age = myInput.value;

    switch(true){

        case age<0 || age>100:
            p1.textContent = (`your age can't be below 0 or above 100`);
            break;

        case age>=0 && age<=17:
            p1.textContent = (`you're a minor`);
            break;

        case age>=18 && age<=40:
            p1.textContent = (`you're an average person`);
            break;    
    }

}