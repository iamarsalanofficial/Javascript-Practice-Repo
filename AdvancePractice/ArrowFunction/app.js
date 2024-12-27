function abc(name) {
    return `Hello, ${name}!`;
  }
  console.log(abc("Arsalan")); // Output: Hello, Arsalan!


const greet = (name) => `Hello, ${name}!`;
console.log(greet("Arsalan")); // Output: Hello, Arsalan!


const xyz = (a,b) =>
{
    sum = a + b;
    return `Hello, Arsalan ${sum}!`;
}

console.log(xyz(50, 15)); // Output: Hello, Arsalan!

const students = [
    { name: "Ali", marks: 40 },
    { name: "Arsalan", marks: 80 },
    { name: "Sara", marks: 90 },
  ];
  
  const passedStudents = students.filter(student => student.marks >= 50);
  console.log(passedStudents);
  // Output: [{ name: "Arsalan", marks: 80 }, { name: "Sara", marks: 90 }]

// const numbers = [1, 2, 3, 4];
// const numbers = [2, 4, 6, 8];
const numbers = [1, 2, 3, 4, 5, 6];
// Expected Output: [2, 4, 6]
const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers); // Output: [2, 4, 6, 8]


const products = [
    { name: "Laptop", price: 800 },
    { name: "Mobile", price: 500 },
    { name: "Tablet", price: 300 },
  ];
  
  products.sort((a, b) => a.price - b.price);
  console.log(products);
  // Output: Sorted products by price

  const cart = [
    { product: "Laptop", price: 800 },
    { product: "Mobile", price: 500 },
    { product: "Tablet", price: 300 },
  ];