// //  function constructor
// function Bird(name) {
//   this.name = name; //own property
// }

// Bird.prototype.numLegs = 2; // prototype property

// let duck = new Bird('Donald');

// // ------------------

// // Add all of the own properties of beagle to the array ownProps. Add all of the prototype properties of Dog to the array prototypeProps.
// function Dog(name) {
//   this.name = name;
// }

// Dog.prototype.numLegs = 4;

// let beagle = new Dog('Snoopy');

// let ownProps = [];
// let prototypeProps = [];

// // Only change code below this line
// for (let property in beagle) {
//   if (beagle.hasOwnProperty(property)) {
//     ownProps.push(property);
//   } else {
//     prototypeProps.push(property);
//   }
// }

// console.log(prototypeProps);

// // --------------

// // constructor
// function Dog(name) {
//   this.name = name;
// }

// function joinDogFraternity(candidate) {
//   if (candidate.constructor === Dog) {
//     return true;
//   } else {
//     return false;
//   }
// }

// // prototype
// // Object.create(obj) creates a new object, and sets obj as the new object's prototype. Recall that the prototype is like the "recipe" for creating an object. By setting the prototype of animal to be the prototype of Animal, you are effectively giving the animal instance the same "recipe" as any other instance of Animal.

// function Animal() {}

// Animal.prototype = {
//   constructor: Animal,
//   eat: function () {
//     console.log('nom nom nom');
//   },
// };

// // Only change code below this line

// let a = Object.create(Animal.prototype); // Change this line
// let b = Object.create(Animal.prototype); // Change this line

// function Animal() {}

// Animal.prototype = {
//   constructor: Animal,
//   eat: function () {
//     console.log('nom nom nom');
//   },
// };

// function Dog() {}

// //instances of Dog inherit from Animal.
// Dog.prototype = Object.create(Animal.prototype);

// let beagle = new Dog();
// let name = 'Ваrtyrytyrtyся';
// function sayHi() {
//   console.log(name);
// }

// setTimeout(function () {
//   let name = 'sd';
//   sayHi();
// }, 1000);

// console.log('test message');
// [1, 2, 3, 4, 5].forEach((el) => {
//   console.log(el);
// });
