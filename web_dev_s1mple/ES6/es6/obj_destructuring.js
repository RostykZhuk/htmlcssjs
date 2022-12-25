const personOne = {
  name: 'Rostyk',
  age: 18,
  address: {
    city: 'Lviv',
    state: 'Ukraine',
  },
};
const personTwo = {
  name: 'Dasha',
  age: 19,
  address: {
    city: 'Lviv',
    state: 'Ukraine',
  },
};

// const { name: firstName = 'John', age, favFood = 'Pizza' } = personOne;
// const { name: firstName = 'John', ...rest } = personOne;
// const {
//   name: firstName = 'John',
//   address: { state },
// } = personOne;
// console.log(firstName, state);
// ====================================

function printUser({ name, age, favFood = 'Watermelon' }) {
  console.log(`Name is: ${name}. Age is ${age}. Favfood is ${favFood}`);
}
printUser(personOne);
// ====================================
// const One = {
//   name: 'Rostyk',
//   age: 18,
//   address: {
//     city: 'Lviv',
//     state: 'Ukraine',
//   },
// };
// const Two = {
//   favFood: 'Sushi',
//   age: 19,
// };

// const three = { ...One, ...Two };
// console.log(three);
