//i miss someone....


function mySubmit(){


    const myInput = document.getElementById(`myInput`).value;
    const number1 = document.getElementById(`number1`);
    const values = []

    for(i = 0; i < myInput; i++){
        const value = Math.floor(Math.random() * 6) + 1;
        values.push(value);



    }
    number1.textContent = `dice: ${values.join(`, `)}`;
}