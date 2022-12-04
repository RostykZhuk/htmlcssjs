// const person = {
//   surname: 'Obama',
//   knows(what, name) {
//     console.log(`You  knows ${what},${name} ${this.surname}`);
//   },
// };
// const brayan = {
//   surname: 'Snow',
// };

// person.knows('Everything', 'Barak');
// // calling method knows in context of Brayan
// // call and apply call a function
// person.knows.call(brayan, 'Nothing', 'John');
// person.knows.call(brayan, ...['Nothing', 'John']);
// person.knows.apply(brayan, ['Nothing', 'John']);

// // bind return a new function and after we need to call it
// // the same
// // person.knows.bind(brayan, 'Nothing', 'John')();
// const calling = person.knows.bind(brayan, 'Nothing', 'John');
// calling();

//======================
// function Person(name, age) {
//   this.name = name;
//   this.age = age;
//   console.log(this);
// }

// const dasha = new Person('dasha', '19');

// ========= Явний

// function logThis() {
//   console.log(this);
// }
// const obj = { num: 42 };
// logThis.apply(obj);
// logThis.call(obj);
// logThis.bind(obj)();

// ========== Неявний

// const animal = {
//   legs: 4,
//   logThis() {
//     console.log(this);
//   },
// };
// animal.logThis();

// ==============
function Cat(color) {
  this.color = color;
  console.log('This', this);
  //   стрілочна функція не створює свій власний контекст
  (() => console.log('Arrow this', this))();
}
new Cat('red');
