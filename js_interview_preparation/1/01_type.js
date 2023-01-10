// 7 data types 6 primitives + obj
// null undefined boolean number string object symbol
// console.log(typeof 0);
// console.log(typeof true);
// console.log(typeof 'Javascript'); // "" '' ``
// console.log(typeof undefined); // коли зміна не обявлена
// console.log(typeof {});
// console.log(typeof Symbol('Js'));
// console.log(typeof null); // null we havent any value
// console.log(typeof function () {});
// console.log(typeof NaN); // Not a number

// =========================================================================
// Переведення типів
// let language = 'JavaScript';
// if (language) {
//   console.log('The best language is: ', language);
// }

// false : 0, '', null, undefined, NaN, false
// console.log(Boolean(''));
// console.log(Boolean('Hello'));
// console.log(Boolean(' '));
// console.log(Boolean('0'));
// console.log(Boolean(0));
// console.log(Boolean(null));
// console.log(Boolean([])); //true
// console.log(Boolean({})); //true
// console.log(Boolean(function () {})); //true

// strings and numbers
// console.log(1 + '2'); // string 12
// console.log('' + 1 + 0); //string 10
// console.log('' - 1 + 0); //number -1
// console.log('3' * '8'); //number 24
// console.log(4 + 10 + ' px'); //14px
// console.log('px ' + 4 + 10); //px410
// console.log('42' - 40); //number 2
// console.log('42px' - 40); //NaN
// console.log(null + 2); //2
// console.log(undefined + 2); // NaN

//=============================================================================
//  == vs ===
// == по значенню з переведенням типів
// === строго по значенню
// is recomended to use ===
// console.log(2 == '2'); //true
// console.log(2 === '2'); //false
// console.log(undefined == null); //true
// console.log(undefined === null); //false
// console.log('0' == false); //true
// console.log('0' == 0); //true
// console.log(0 == 0); //true
//==============================================================================
// console.log(false == ''); //true
// console.log(false == []); //true
// console.log(false == {}); //false
// console.log(false == 0); //true
// console.log('' == []); //true
// console.log('' == {}); //false
// console.log(0 == []); //true
// console.log(0 == {}); //false
// console.log(0 == null); //false
