// const alphabet = ['A', 'B', 'C', 'D', 'E', 'F'];
// const numbers = ['1', '2', '3', '4', '5', '6'];

// const [a, , c, ...rest] = alphabet;
// const newArray = [...alphabet, ...numbers];
// const newArray1 = alphabet.concat(numbers);

// console.log(newArray);
// console.log(newArray1);

// console.log(a, c, rest);
// --------------
function sumAndMultiply(a, b) {
  return [a + b, a * b, a / b];
}

// const array = sumAndMultiply(2, 3);
// console.log(array);
// we want to destructure to returned from this as 3 different variables
const [sum, multiply, division = 'No division'] = sumAndMultiply(2, 3);
console.log(sum, multiply, division);
