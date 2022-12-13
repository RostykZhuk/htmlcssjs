console.log(findVowels('hello'));
console.log(findVowels('why'));

function findVowels(str) {
  let count = 0;
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  for (let char of str.toLowerCase()) {
    if (vowels.includes(char)) {
      count++;
    }
  }
  return count;
}

// function findVowels(str) {
//   const matched = str.match(/[aeiou]/gi); //returns an array
//   return matched ? matched.length : 0;
// }
