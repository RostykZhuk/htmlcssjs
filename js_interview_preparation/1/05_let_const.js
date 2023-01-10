// // Let
// let a = 'Variable a';
// let b = 'variable b';
// // Block scope
// {
//   a = 'New Variable A'; //redefining a
//   let b = 'Local Variable B'; //creating a now local variable
//   console.log('Scope A', a); // Scope A New Variable A
//   console.log('Scope B', b); // Scope B Local Variable B

//   //   console.log("Scope C",c); // error bcs it is called before defining it
//   //   let c = 'Something';
// }
// console.log('A: ', a); //A:  New Variable A
// console.log('B:', b); //B: variable b

// =====================
// const
// we cant change the const using primitives

// const port = 8080;
// port = 2000; //error

// // Array
// const array = ['Javascript', 'is', 'awesome'];
// array.push('!');
// array[0] = 'JS';
// // array = ''; //error
// console.log(array);

// Objects
const obj = {};
obj.name = 'Rostyk';
obj.age = 18;
console.log(obj);
obj.age = 21;
delete obj.name;
// obj = 24; //Error
// obj = ''; //Error
console.log(obj);
