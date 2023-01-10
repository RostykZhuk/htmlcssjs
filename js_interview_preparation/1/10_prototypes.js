// Кожний обєкт має свій прототип, який береться від батьківського елемента від якого був створений даних обєкт
// __proto__   ES6
// Object.getPrototypeOf()  ES5

// class Cat {
//   constructor(name, color) {
//     this.name = name;
//     this.color = color;
//   }
// }

// Cat.prototype.voice = function () {
//   console.log(`Cat ${this.name} says myay`);
// };

// const cat = new Cat('Basik', 'gray');
// cat.voice();

// ===================

// class Person {}
// Person.prototype.legs = 2;
// Person.prototype.skin = 'white';

// const person = new Person();
// person.name = 'rostyk';
// console.log('skin' in person);

// // Protope parameters vs own parameters
// console.log(person.hasOwnProperty('name')); //true
// console.log(person.hasOwnProperty('skin')); //false

// ===================
// Object.create()
const proto = { year: 2019 };
const myYear = Object.create(proto);
// proto.year = 2200;

console.log(myYear.year);
console.log(myYear.hasOwnProperty('year')); //false
console.log(myYear.__proto__ === proto); //true
