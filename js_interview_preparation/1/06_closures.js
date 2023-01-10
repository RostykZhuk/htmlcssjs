// Замикання це коли функція має доступ до змінних із вищепоставленого скоупа.
// ====================
// function sayHelloTo(name) {
//   const message = 'Hello ' + name;
//   return function () {
//     console.log(message);
//   };
// }

// const helloToRostyk = sayHelloTo('Rostyk');
// const helloToDasha = sayHelloTo('Dasha');
// helloToRostyk();
// helloToDasha();

// ==================
// Practice
// function createFrameworkManager() {
//   // змінна fw недоступна нам ніде ззовні, але ми миожем з ним всеодно взаємодіяти
//   const fw = ['Angular', 'React'];
//   return {
//     // 2 функції нижче замкнули в собі значення fw
//     print() {
//       console.log(fw.join(' ')); // join(' ') returns a wrapped string with space between
//     },
//     add(framework) {
//       fw.push(framework);
//     },
//   };
// }

// const manager = createFrameworkManager();
// // console.log(manager);
// manager.print();
// manager.add('VueJS');
// manager.print();

// Interview example closures with setTimeout

// const fib = [1, 2, 3, 5, 8, 13];
// for (let i = 0; i < fib.length; i++) { // var instead let will give us 6 lines of undefined
//   setTimeout(() => {
//     console.log(`fib[${i}] = ${fib[i]}`);
//   }, 1500);
// }

const fib = [1, 2, 3, 5, 8, 13];
for (var i = 0; i < fib.length; i++) {
  (function (j) {
    setTimeout(() => {
      console.log(`fib[${j}] = ${fib[j]}`);
    }, 1500);
  })(i);
}
