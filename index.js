//a new less


let username;


document.getElementById(`mySubmit`).onclick = function(){
    username = document.getElementById(`myText`).value;
    document.getElementById(`myh1`).textContent = (`HELLO, ${username}`);
}

let a;

document.getElementById(`mySubmit2`).onclick = function(){
    a = document.getElementById(`myText2`).value;
    document.getElementById(`p1`).textContent = (`${a}`);
}

let b;

document.getElementById(`mySubmit3`).onclick = function(){
    b = document.getElementById(`myText3`).value;
    document.getElementById(`p2`).textContent = (`${b}`);
}

let c;

document.getElementById(`mySubmit4`).onclick = function(){
    c = document.getElementById(`myText4`).value;
    document.getElementById(`p3`).textContent = (`${c}`);
}