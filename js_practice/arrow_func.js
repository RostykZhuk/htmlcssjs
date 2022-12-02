// // Normal function
// function sum(a, b) {
//   return a + b;
// }
// // Arrow function
// const sum2 = (a, b) => a + b;
// // Normal function
// function isPositive(number) {
//   return number >= 0;
// }
// // Arrow function
// const isPositive2 = (number) => number >= 0;
// // Normal function
// function randomNumber() {
//   return Math.random;
// }
// // Arrow function
// const randomNumber2 = () => Math.random;
// // Normal function
// document.addEventListener('click', function () {
//   console.log('click');
// });
// // Arrow function
// document.addEventListener('click', () => {
//   console.log('click');
// });

// Practice

class Person {
  constructor(name) {
    this.name = name;
  }
  printNameArrow() {
    setTimeout(() => {
      console.log('Arrow: ' + this.name);
    }, 1000);
  }

  printNameFunction() {
    setTimeout(function () {
      console.log('Function: ' + this.name);
    }, 2000);
  }
}

let person = new Person('Bob');
person.printNameArrow(); // Bob
person.printNameFunction(); // undefined
// Normal function in js redefines this keyword.

// console.log(this.name);
