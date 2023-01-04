const input1 = 'leetcode';
const input2 = 'loveleetcode';
const input3 = 'aabbc';

const firstUniqueChar = (s) => {
  let map = new Map();

  for (let i = 0; i < s.length; i++) {
    const current = s[i];

    if (map.has(current)) {
      map.set(current, map.get(current) + 1);
    } else {
      map.set(current, 1);
    }
  }

  for (let i = 0; i < s.length; i++) {
    if (map.get(s[i]) === 1) {
      return i;
    }
  }
  return -1;
};

console.log(firstUniqueChar(input1));
console.log(firstUniqueChar(input2));
console.log(firstUniqueChar(input3));
