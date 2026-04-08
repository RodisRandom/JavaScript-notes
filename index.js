//a test

let a = window.prompt(`what do you call a food with crust?`);
a = String(a);

let b = window.prompt(`How expensive is a mansion house?`);
b = Number(b);
b+=20000;

let c = window.prompt(`Add your age to 15?`);
c = Number(c);
c+=15;

let d = window.prompt(`Is dog always dangerous than humane? (true or false)?`);
d = Boolean(d);


document.getElementById(`p1`).textContent = (`a ${a}`);
document.getElementById(`p2`).textContent = (`more than ${b}`);
document.getElementById(`p3`).textContent = (`${c}`);
document.getElementById(`p4`).textContent = (`${d}`);