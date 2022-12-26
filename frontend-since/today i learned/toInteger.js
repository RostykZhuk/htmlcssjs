let floatNumber = 123.456789;

// 1 ES6 Way
// відсікає значення після коми
Math.trunc(floatNumber);

// 2 Round
Math.round(floatNumber);
Math.ceil(floatNumber);
Math.floor(floatNumber);

// 3 parseInt
parseInt(floatNumber, 10);

// 4 Int32Array
let newArray = new Int32Array([floatNumber]);
console.log(newArray[0]);

// 5 Bitwise OR

let a = 13.6 | 0;
let b = 2.45 | 0;
let c = -3.6 | 0;

// 6 Bitwise NOT

~~2.0;
~~-3.2;
~~4.1;
// =============================
// How to check if Number is Integer not Float

let n = 123;
// 1 Number.isInteger. не підтримується exporer browser
Number.isInteger(n);
// 2 ParseInt
n === parseInt(n, 10);
// 3 Using %
Number(n) === n && n % 1 === 0;
// 4 short form
!(n % 1);
// 5 Bitwise OR
n === +n && n === (n | 0);
