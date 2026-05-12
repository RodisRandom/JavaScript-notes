//string method


const mySubmit = document.getElementById(`mySubmit`);
const myInput = document.getElementById(`myInput`);
const p1 = document.getElementById(`p1`);

let username;
let firstcharacter;
let secondcharacter;
let thirdcharacter;
let fourthcharacter;


mySubmit.onclick = function(){

    username = myInput.value;

    firstcharacter = username.charAt(0);
    firstcharacter = firstcharacter.toLowerCase();

    secondcharacter = username.slice(1, 11);
    secondcharacter = secondcharacter.toUpperCase();

    thirdcharacter = username.slice(11, 16);
    thirdcharacter = thirdcharacter.repeat(2);

    fourthcharacter = username.slice(16, 25);
    fourthcharacter = fourthcharacter.toUpperCase();

    username = firstcharacter + secondcharacter + thirdcharacter + fourthcharacter;

    p1.textContent = username;
}