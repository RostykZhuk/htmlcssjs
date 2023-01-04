const input1 = [1, 2, 2, 1];
const input2 = [2, 2];

const input3 = [4, 9, 5];
const input4 = [9, 4, 9, 8, 4];

const intersect = (nums1, nums2) => {
  let result = [];

  let map = nums1.reduce((acc, i) => {
    acc[i] = acc[i] ? acc[i] + 1 : 1;
    return acc;
  }, {});

  for (let i = 0; i < nums2.length; i++) {
    const current = nums2[i];
    let count = map[current];

    if (count && count > 0) {
      result.push(current);
      map[current] -= 1;
    }
  }
  return result;
};
console.log(intersect(input1, input2));
console.log(intersect(input3, input4));
