// function sum(a, b) {
//   return a + b;
// }
// console.log(1, 41);

// The same

// console.log(1, 41);
// function sum(a, b) {
//   return a + b;
// }

// ======================
// hoisting will be applied only to the var keyword

// console.log(i); //undefined
// var i = 42;
// console.log(i); //42

// ===================

// console.log(num);
// const num = 4; //error
// // the same
// console.log(sum);
// let sum = 4; //error
// ====================

// function Expression & function Declaration

// we can call it everywhere
// Function Declaration
// console.log(square(25));
// function square(num) {
//   return num ** 2;
// }

// Function Expression
const square = function (num) {
  return num ** 2;
};
console.log(square(25));
// we can use function expression call after defing a function
