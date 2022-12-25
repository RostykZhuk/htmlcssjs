let a = 1;
let b = 2;

setTimeout(function () {
  console.log('Timeout' + a);
}, 100);
a = 10;

console.log('Sync');
console.log(a);
console.log(b);
