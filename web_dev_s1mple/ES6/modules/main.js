import U, { printName as PrintUserName, printAge } from './modules';

const user = new U('Bob', 11);
console.log(user);
console.log(PrintUserName);
console.log(printAge);
