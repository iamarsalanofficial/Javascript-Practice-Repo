// Temlate Literals

// console.log("Hello");

let UserInput = +prompt("Type Any Number");
let range = +prompt("Type Range");

for (let a=1; a <= range; a++){
    document.write(`${UserInput} x ${a} = ${UserInput * a} <br>`);
}