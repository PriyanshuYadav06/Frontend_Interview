const nums = [1, 2, 3, 4, 5];
/*filter is an array method.

It creates a new array containing only the elements that pass a test you define.

It does NOT change the original array.

The test is done by a callback function you provide, which returns true or false. */
const newNums = nums.filter((num, idx, nums) => {
  return num > 3;
});
console.log(newNums);
