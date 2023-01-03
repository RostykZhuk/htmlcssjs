// 1
const num = 42;
// let result
//
// if (num > 20) {
//   result = 'More than 20'
// } else {
//   result = 'Less than 20'
// }

const result = num > 20 ? 'More than 20' : 'Less than 20';

// 2
let variable = 'variable'; // undefined
let variable2;

// if (variable) {
//   variable2 = variable
// } else {
//   variable2 = 'some value'
// }
variable2 = variable || 'some value';
// console.log(variable2)

// 3
// let x
// let y
// let z = 42

// let x, y, z = 42

// 4
let isSame = true;
if (isSame === true) {
}
if (isSame) {
}

if (isSame !== true) {
}
if (!isSame) {
}

// 5
const names = ['Igor', 'Elena', 'Olga'];
for (let i = 0; i < names.length; i++) {
  // names[i]
}
for (let name of names) {
}
for (let index in names) {
}

function logArrayItems(el, index, array) {
  console.log(`names[${index}] = ${el}`);
}

// names.forEach(logArrayItems)

// 6
// let port
// if (process.env.PORT) {
//   port = process.env.PORT
// } else {
//   port = 4200
// }

const port = process.env.PORT || 4200;
// 7

// for (let i = 0; i < 1000000; i++) {}
// for (let i = 0; i < 10e6; i++) {}

// 8
const a = 1,
  b = 2;
const myObj = { a, b };

// 9
// setTimeout(function() {
//   console.log('After 2 seconds')
// }, 2000)
//
// function tripple(num) {
//   return num * 3
// }

// setTimeout(() => console.log('After 2 seconds'), 2000)
// const tripple = num => num * 3

// 10
// function rgb(r, g, b) {
//   if (r === undefined) {
//     r = 0
//   }
//
//   if (g === undefined) {
//     g = 255
//   }
//
//   return `rgb(${r}, ${g}, ${b})`
// }

const rgb = (r = 0, g = 255, b) => `rgb(${r}, ${g}, ${b})`;

// 11
// function createUrl(base, domain) {
//   return 'http://' + base + '.' + domain
// }

function createUrl(base, domain) {
  return `http://${base}.${domain}`;
}

// 12
// const alert = window.alert
// const confirm = window.confirm
// const prompt = window.prompt

// const {alert, prompt, confirm} = window

// 13
const arr = [1, 2, 3];
// const nums = [4, 5, 6].concat(arr)
// const cloned = nums.concat()

const nums = [4, ...arr, 5, 6];
const cloned = [...nums];

// console.log(nums)

// 14
// console.log(Math.floor(9.7) === 9)
// console.log(~~9.7 === 9)

// 15
// console.log(Math.pow(2, 3))
// console.log(Math.pow(2, 4))
// console.log(Math.pow(4, 3))
//
// console.log(2 ** 3)
// console.log(2 ** 4)
// console.log(4 ** 3)

// 16
// const int = parseInt('42')
// const float = parseFloat('42.42')

const int = +'42';
const float = +'42.42';

// console.log(typeof int, typeof float)

// 17
if ([1, 2, 3].indexOf(3) > -1) {
}
if (~[1, 2, 3].indexOf(3)) {
} // найдено
if (!~[1, 2, 3].indexOf(3)) {
} // не найдено
if ([1, 2, 3].includes(3)) {
}

// 18
const car = {
  model: 'Ford',
  year: 2019,
  color: 'red',
};

console.log(Object.entries(car));
console.log(Object.values(car));
console.log(Object.keys(car));
