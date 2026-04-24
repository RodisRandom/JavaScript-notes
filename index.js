//if statement



const myText = document.getElementById(`myText`);
const mySubmit = document.getElementById(`mySubmit`);
const myh1 = document.getElementById(`myh1`);
let age;

mySubmit.onclick = function(){
    age = myText.value;
    age = Number(age);

    if (age > 100){
        myh1.textContent = (`youre too old`);
    }

    else if (age >=18){
        myh1.textContent = (`you can enter this site`);
    }

    else if (age <0){
        myh1.textContent = (`your age can't be below 0`);
    }

    else if (age == 0){
        myh1.textContent = (`you just born`)
    }

    else{
        myh1.textContent = (`you're too young to enter this site`);
    }
}


const myText2 = document.getElementById(`myText2`);
const mySubmit2 = document.getElementById(`mySubmit2`);
const p1 = document.getElementById(`p1`);
let instrument;


mySubmit2.onclick = function(){
    instrument = myText2.value;
    instrument = String(instrument);

    if (instrument == guitar){
        p1.textContent = (`You rock with guitar1!`);
    }

    else if (instrument == violin){
        p1.textContent = (`you're a bethooven!`);
    }

    else if (instrument == piano){
        p1.textContent = (`classical music!`);

    }

    else if (instrument == drum){
        p1.textContent = (`you live in 1970s!`);
    }
}