//string slicing


const myInput = document.getElementById(`myInput`);
const mySubmit = document.getElementById(`mySubmit`);
const p1 = document.getElementById(`p1`);
let name;
let FirstName;
let LastName;

mySubmit.onclick = function(){

    name = myInput.value;

    FirstName = name.slice(0, name.indexOf(` `));
    LastName = name.slice(name.indexOf(` `) + 1);

    p1.textContent = (`${FirstName} ${LastName}`);

    
}