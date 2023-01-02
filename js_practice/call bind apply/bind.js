const person = {
  name: 'Rostyk',
};
function info(phone, email) {
  console.log(`Name: ${this.name}, Phone: ${phone}, Email:${email}`);
}
// Помимо контекста ми мємо враховувати вхідні параметри
// info(); // undefined bcs this hasn't a context or any parameter
// bind returns a function
// info.bind(person)('12345', 'r@gmail.com');
// 2 спосіб застосування
// info.bind(person, '12345')('r@gmail.com');
// info.bind(person, '12345', 'r@gmail.com')();

// 1 Easy example
// function bind(fn, context, ...rest) {
//   return fn.bind(context, ...rest);
// }
// context is an object
// ===============================
// 2 Without inserted methods
// function bind(fn, context, ...rest) {
//   return function (...args) {
//     const uniqId = Date.now().toString();
//     context[uniqId] = fn;

//     const result = context[uniqId](...rest.concat(args));
//     delete context[uniqId];
//     return result;
//   };
// }

// 3 ES5
// function bind(fn, context) {
//   const rest = Array.prototype.slice.call(arguments, 2);
//   return function () {
//     const args = Array.prototype.slice.call(arguments);
//     return fn.apply(context, rest.concat(args));
//   };
// }

// 4 ES6
// function bind(fn, context, ...rest) {
//   return function (...args) {
//     // return fn.apply(context,rest.concat(args))
//     return fn.call(context, ...rest.concat(args));
//   };
// }

// bind(info, person)('12345', 'r@gmail.com');
// bind(info, person, '12345')('r@gmail.com');
// bind(info, person, '12345', 'r@gmail.com')();

// call
function call(fn, context, ...args) {
  const uniqId = Date.now().toString();
  context[uniqId] = fn;
  const result = context[uniqId](...args);
  delete context[uniqId];
  return result;
}
call(info, person, '12345', 'r@gmail.com');

// apply
function apply(fn, context, args) {
  const uniqId = Date.now().toString();
  context[uniqId] = fn;
  const result = context[uniqId](...args);
  delete context[uniqId];
  return result;
}
apply(info, person, ['12345', 'r@gmail.com']);
