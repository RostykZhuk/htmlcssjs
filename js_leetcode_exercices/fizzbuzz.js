fizzBuzz(22);

function fizzBuzz(num) {
  for (let i = 1; i < num; i++) {
    // спочатку провіряєм складну умову, щоб перевірка спрацювала у всюди
    if (i % 3 === 0 && i % 5 === 0) {
      console.log('fizzbuzz');
    } else if (i % 3 === 0) {
      console.log('fizz');
    } else if (i % 5 === 0) {
      console.log('buzz');
    } else {
      console.log(i);
    }
  }
}
