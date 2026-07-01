//i miss someone....



function characters(length, lowercase, uppercase, symbols, numbers){


    const LowerCases = "abcdefghijklmnopqrstuvwxyz";
    const UpperCases = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const Numbers = "0123456789";
    const Symbols = ".,;-_=@#$";
    let adding = "";
    let password = "";

    adding += lowercaseNumber ? LowerCases : "";
    adding += uppercaseNumber ? UpperCases : "";
    adding += includeSymbols ? Symbols : "";
    adding += includeNumbers ? Numbers : "";


    if(length <= 0){
        console.log(`pls type any values or numbers`)
    }

    if(adding.length === 0){
        console.log(`pls select any characters for the random password generator to work`)
    }

    for(let i = 0; i < length; i++){

        const RandomNumber = Math.floor(Math.random() * adding.length);

        password += adding[RandomNumber];
    }


    return password;
}

const lengthNumber = 12;
const lowercaseNumber = true;
const uppercaseNumber = true;
const includeSymbols = true;
const includeNumbers = true;

const sum = characters(lengthNumber, lowercaseNumber, uppercaseNumber, includeSymbols, includeNumbers);

console.log(`${sum}`);