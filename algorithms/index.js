// recursion code
let sum = addTo(10);
console.log(sum);

function addTo(n) {
  if (n == 0) return 0;

  return n + addTo(n - 1);
}

// default code
var sum1 = addTo(10);
console.log(sum1);

function addTo(n) {
  var sum1 = 0;

  for (var i = 1; i <= n; i++) {
    sum1 += i;
  }

  return sum1;
}
