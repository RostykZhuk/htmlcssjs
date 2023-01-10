function isUnique(string) {
  // 1 example
  //   for (let i = 0; i < string.length; i++) {
  //     const element = string[i];
  //     if (string.lastIndexOf(element) !== i) {
  //       return false;
  //     }
  //   }
  //   return true;
  // 2 Set

  //   const set = new Set();

  //   for (let i = 0; i < string.length; i++) {
  //     const element = string[i];

  //     if (set.has(element)) {
  //       return false;
  //     }

  //     set.add(char);
  //   }
  //   return true;

  // 3 set simple

  return new Set(string).size === string.length;
}

console.log(isUnique('abcdef')); // -> true
console.log(isUnique('1234567')); // -> true
console.log(isUnique('abcABC')); // -> true
console.log(isUnique('abcadef')); // -> false
