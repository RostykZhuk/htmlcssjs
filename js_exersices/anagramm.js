// function builtCharObject(str) {
//   const charObj = {}; //creating an empty object
//   str = str.toLowerCase().replace(/[^\w]/g); //converting the string to Lowercase and removing всі небуквенні символи.  Спецсивал \w це люба цифра буква або знак підчеркування
//   for (let char of str) {
//     charObj[char] = charObj[char] + 1 || 1;
//   }
//   return charObj;
// }

// function anagram(strA, strB) {
//   const aCharObj = builtCharObject(strA);
//   const bCharObj = builtCharObject(strB);

//   //   object keys returns an array with unique keys
//   //   Ми порівнюєм чи є одинакова довжжина унікальних значень кожного масиву
//   if (Object.keys(aCharObj).length !== Object.keys(bCharObj).length) {
//     return false;
//   }
//   //   нам треба порівняти конкертну величину кожного символу в 2 масивах
//   // посимвольно перевіряєм чи кількість символів однакова в 2 обєктах однакова
//   for (let char in aCharObj) {
//     if (aCharObj[char] !== bCharObj[char]) {
//       return false;
//     }
//   }
//   return true;
// }
//  oneliner

const anagram = (a, b) =>
  [...a.toLowerCase()].sort().toString() ===
  [...b.toLowerCase()].sort().toString();

console.log(anagram('friend', 'Finder'));
console.log(anagram('hello', 'bye'));
