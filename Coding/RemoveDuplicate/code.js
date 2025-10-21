const RemoveDuplicate = (nums) => {
  return [...new Set(nums)];
};
const ans = RemoveDuplicate([1, 2, 2, 3, 4, 4, 5]);
console.log(ans);
