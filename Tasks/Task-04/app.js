const arrays = [
  42,
  true,
  "Hello, World!",
  {
    name: "John",
    age: 25,
    isStudent: false,
  },
  false,
  3.14,
  "JavaScript is fun!",
];
  
// Q #01 Map Se New Array Return lekr String() Data Filter hu raha 
const stringArray = arrays.map((element) => String(element));
console.log(stringArray);

// Q #02 Filter se data filter hu raha
const numbersArray = arrays.filter(element => typeof element === 'number');
console.log(numbersArray);

// Q #03
arrays.forEach(element => console.log(typeof element));

const sum = arrays
  .filter(element => typeof element === 'number') // Filter numbers
  .reduce((accumulator, current) => accumulator + current, 0); // Sum numbers
console.log(sum);


const firstBoolean = arrays.find(element => typeof element === 'boolean');
console.log(firstBoolean);


const objectIndex = arrays.findIndex(element => typeof element === 'object' && !Array.isArray(element));
console.log(objectIndex);


const hasNumbers = arrays.some(element => typeof element === 'number');
console.log(hasNumbers);


const allStrings = arrays.every(element => typeof element === 'string');
console.log(allStrings);
