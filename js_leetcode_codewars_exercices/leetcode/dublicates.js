const arr1 = [1, 1, 2];
const arr2 = [0, 0, 1, 1, 1, 1, 1, 1, 2, 2, 3, 3, 4];

let removeDublicates = (nums) => {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === nums[i - 1]) {
      nums.splice(i, 1);
      i--;
    }
  }

  return nums.length;
};
console.log(removeDublicates(arr1));
console.log(arr1);
console.log(removeDublicates(arr2));
console.log(arr2);
