/*
reduce is an array method that reduces all elements of an array into a single value.

The value can be anything: a number, string, object, array, etc.

It executes a reducer function on each element, accumulating a result.

You can think of it as folding the array into one output.
*/
const nums = [1, 21, 3, 4, 5];

const sum =nums.reduce((acc,curr,idx,nums)=>{
   return acc+=curr;
},0)
const maxi=nums.reduce((acc,curr)=>{
   return Math.max(acc, curr);
},-Infinity)
console.log(sum);
console.log(maxi);