let sendMessage = (name, num) => {
  console.log(name, num);
};

// let wrapper = (func, name, num) => {
//   func(name, num);
// };

let wrapper = (func, ...args) => {
  func(...args);
};
