const factorial = (n) => {
  if (n === 1) {
    return 1;
  }
  return n * factorial(n - 1);
};
console.log(factorial(5));

const fibbonacci = (n) => {
  if (n === 1 || n === 2) {
    return 1;
  }
  return fibbonacci(n - 1) + fibbonacci(n - 2);
};

console.log(fibbonacci(8));
