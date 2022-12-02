// Масив функція і обєкт зберігають силку на масив

// let a = 42;
// let b = a;
// b++;
// console.log('a', a); //42
// console.log('b', b); //43

// let a = [1, 2, 3];
// let b = a.concat();//копія масиву
// let b = [...a]; //копія масиву
// b.push(4);
// console.log('a', a); //[1,2,3]
// console.log('b', b); //[1,2,3,4]

let a = [1, 2, 3];
let b = a; //скопіювали як силку на масив
b.push(4);
let c = [1, 2, 3, 4];
console.log('a', a); //[1,2,3,4]
console.log('b', b); //[1,2,3,4]
console.log(a === b); //true тому шо така сама силка на масив
console.log(a === c); //false тому що силки різні
