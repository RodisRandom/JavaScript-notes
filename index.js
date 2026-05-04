//switch

const myInput = document.getElementById(`myInput`);
const mySubmit = document.getElementById(`mySubmit`);
const p1 = document.getElementById(`p1`);
let message;


mySubmit.onclick = function(){

    message = myInput.value;

    switch(true){

        case message>=100:
            p1.textContent = (`You're a strong, healthy person`)
            break;

        case message>=80:
            p1.textContent = (`you lived more than an average person lived`)
            break;
            
        case message>=60:
            p1.textContent = (`you're a senior citizen`)
            break;
            
        case message>=40:
            p1.textContent = (`you're a middle aged person`)
            break;
            
        case message>=18:
            p1.textContent = (`you're an adult`)
            break;
            
        default:
            p1.textContent = (`you're just a minor`)
            break;    
    }
}


const myInput2 = document.getElementById(`myInput2`);
const mySubmit2 = document.getElementById(`mySubmit2`);
const p2 = document.getElementById(`p2`);

mySubmit2.onclick = function(){


    switch(true){
        case myInput2.checked:
            p2.textContent = (`You're a boy`)
            break;

        default:
            p2.textContent = (`you're a female`)
            break;    
    }


}