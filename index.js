//testing for const

console.log(`testing`);

let a;
a = "WELCOME TO THE";

document.getElementById(`myh1`).textContent = (`${a} WEBSITE!!`);

let b = window.prompt(`What is the average price for a pizza, in terms of inflation - itll add itself.`);
b = Number(b);

const c = 120;

let f;
f = b + c;
f = Number(f);



let d = window.prompt(`What is the average price for a hotdog, in terms of deflaton, itll minus itself.?`);
d = Number(d);

const e = 20;

let l;
l = d - e;
l = Number(l);


document.getElementById(`p1`).textContent = (`PRICE: ${f}`);

document.getElementById(`p2`).textContent = (`PRICE: ${l}`);