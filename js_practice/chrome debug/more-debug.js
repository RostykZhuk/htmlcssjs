// const people = [
//   {
//     id: 1,
//     name: 'Rostyk',
//     age: 19,
//   },
//   {
//     id: 2,
//     name: 'Dasha',
//     age: 20,
//   },
//   {
//     id: 3,
//     name: 'Martin',
//     age: 20,
//   },
//   {
//     id: 4,
//     name: 'Loba',
//     age: 33,
//   },
// ];

// console.table(people);
// how powerfull is your code
console.time('timer');
const items = [];

for (let i = 0; i < 1000000; i++) {
  items.push({ el: i + 1 });
}
console.timeEnd('timer');
