const input = [4, 1, 2, 1, 2];

// const singleNumber = (nums) => {
//   let uniq = new Set();
//   let uniqSum = 0;
//   let numSum = 0;

//   for (let i = 0; i < nums.length; i++) {
//     const current = nums[i];

//     if (!uniq.has(current)) {
//       uniq.add(current);
//       uniqSum += current;
//     }
//     numSum += current;
//   }

//   return uniqSum * 2 - numSum;
// };
// =======  2
const singleNumber = (nums) => {
  let uniq = Array.from(new Set(nums));

  let reduceSum = (s, i) => s + i;

  let uniqSum = uniq.reduce(reduceSum);
  let numSum = nums.reduce(reduceSum);

  return uniqSum * 2 - numSum;
};
console.log(singleNumber(input));
