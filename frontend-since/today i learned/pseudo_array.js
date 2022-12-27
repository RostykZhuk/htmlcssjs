function normalFn() {
  console.log(arguments);
}

normalFn(); //{}
normalFn(1); // {'0':1}

// const arrowFn = () => console.log(arguments);
// arrowFn();
// ReferenceError
const arrowFn = (...args) => console.log(args);
console.log(arrowFn(1, 2, 3));
