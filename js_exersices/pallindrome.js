console.log(palindrome('racecar'));
console.log(palindrome('table'));
console.log(palindrome('Anna'));
console.log(palindrome('А роза упала на лапу Азора'));

// Example 1
// split('') переводить кожен елемент строки в окремі елементи масиву
// join('') переводимо масив з елементів в строку
//replace(/\s/g, '') забираємо всі пробіли з строки
function palindrome(str) {
  str = str.toLowerCase().replace(/\s/g, '');
  return str === str.split('').reverse().join('');
}
// ======================
// Example 2
// Якщо дуже довгий паліндром або дуже довга строка без пробілів
// порівнюємо 1 і останній символ в масиві. Перевірку робимо до середини масиву бо дальше нема сенсу. Але працює не у всіх випадках коректно
// function palindrome(str) {
//   const len = Math.floor(str.length / 2);
//   for (let i = 0; i < len; i++) {
//     if (str[i] !== str[str.length - i - 1]) return false;
//   }
//   return true;
// }
