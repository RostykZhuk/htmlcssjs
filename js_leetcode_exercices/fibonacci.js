// function fibonacci(number) {
//   const result = [0, 1];
//   for (let i = 2; i <= number; i++) {
//     const prevNum1 = result[i - 1];
//     const prevNum2 = result[i - 2];
//     result.push(prevNum1 + prevNum2);
//   }
//   return result[number];
// }

// console.log(fibonacci(73));

// function fibonaccishort(num) {
//   let a = 1,
//     b = 1;
//   for (let i = 3; i <= num; i++) {
//     [a, b] = [b, a + b];
//   }
//   return b;
// }
// console.log(fibonaccishort(4));

// recursion example
function fibonacci2(num) {
  if (num < 2) {
    return num;
  }
  return fibonacci2(num - 1) + fibonacci2(num - 2);
}

console.log(fibonacci2(5));
