//checked property


const mySubscribe = document.getElementById(`mySubscribe`);
const myGCash = document.getElementById(`myGCash`);
const myCreditCard = document.getElementById(`myCreditCard`);
const mySubmit = document.getElementById(`mySubmit`);
const p1 = document.getElementById(`p1`);
const p2 = document.getElementById(`p2`);



mySubmit.onclick = function(){

    if(mySubscribe.checked){
        p1.textContent = (`You are subscribed`)
    }

    else{
        p1.textContent = (`you are not subscribed`)
    }

    if(myGCash.checked){
        p2.textContent = (`you are paying with gcash`)
    }

    else if(myCreditCard.checked){
        p2.textContent = (`you are paying with credit card`)
    }
    else{
        p2.textContent = (`you must select one`)
    }
}