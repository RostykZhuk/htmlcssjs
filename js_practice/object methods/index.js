const user = {
  name: 'Rostyk',
  job: 'Frontend',
  income: 1000,
};

console.log(user);

// keys
let keys = Object.keys(user);
console.log(keys);

let values = Object.values(user);
console.log(values.join(' '));

let entry = Object.entries(user);
console.log(entry);

entry.map(([index, item]) => {
  console.log(index, item);
});
