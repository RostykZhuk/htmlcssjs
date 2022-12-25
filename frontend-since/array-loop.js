const items = ['item1', 'item2', 'item3'];
const copy = [];
// for (let i = 0; i < items.length; i++) {
//   copy.push('New ' + items[i]);
// }
items.forEach(function (elem, index, array) {
  copy.push(index + ' New ' + elem);
});
console.log(copy);

// =========== filter

let array = [12, 5, 8, 130, 44];
// filter returns a new array
// const filtered = array.filter(function (elem) {
//   return elem > 15;
// });
let isBig = (elem) => elem > 10;
const filtered = array.filter(isBig);
console.log(filtered);

// =========== map
// map returns a new array
let nums = [1, 4, 9, 12, 50];
let result = nums.map((elem) => elem * 2);
console.log(result);

// =========== reduce
// const array1 = [1, 2, 3, 4, 5];

// let total = array1.reduce((acc, elem) => {
//   console.log(`Acc ${acc} Current el ${elem}`);
//   return acc + elem;
// }, 10);

// console.log(total);

const arrayy = ['apple', 'banana', 'peach', 'orange'];

let fruits = arrayy.reduce((acc, elem) => {
  acc[elem] = 1;
  return acc;
}, {});
console.log(fruits);
