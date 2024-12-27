// Temlate Literals
// console.log("Hello World");

// let UserInput = +prompt("Type Any Number");
// let range = +prompt("Type Range");

// for (let a=1; a <= range; a++){
//     document.write(`${UserInput} x ${a} = ${UserInput * a} <br>`);
// }



// Ternory Operators (ES6)

// let age = 18;
// let check = age == 20 ? 'Allow' : 'Not Allowed'; 
// console.log(check);


// Ternory Operators Nested (ES6)

// let city = "karachi";
// let people = 20;

// let checked = city === "lahore" ? people === 10 ? 'Allow' : 'Only 20 Peoples Are Allowed, Sorry..!!':'City Not Matched'; 
// console.log(checked);


// Percentage System (Ternory Operators)

// let percentage = +prompt("Enter Your Percantege");

// let percentageCheck = percentage >= 90 || percentage == 100 ? 'Your Grade is A+' :
//                       percentage >= 70 ? 'Your Grade is A':
//                       percentage >= 60 ? 'Your Grade is B':
//                       percentage >= 50 ? 'Your Grade is C':
//                       percentage >= 33 ? 'Your Grade is D':
//                       ' You Are Failed';

// console.log(percentageCheck);


let math = +prompt("Enter Your Math Marks");
let eng = +prompt("Enter Your Eng Marks");
let urdu = +prompt("Enter Your Urdu Marks");

var totalMarks = math + eng + urdu;
let percentage = (totalMarks/ 300)*100;
let percentageCheck = percentage >= 90 && percentage <= 100 ? 'Your Grade is A+' :
                      percentage >= 70 ? 'Your Grade is A':
                      percentage >= 60 ? 'Your Grade is B':
                      percentage >= 50 ? 'Your Grade is C':
                      percentage >= 33 ? 'Your Grade is D':
                      'You Are Failed';

console.log(`${percentageCheck}`);

