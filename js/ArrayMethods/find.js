// Used to get the first element that matches a condition.
// Both methods stop searching as soon as they find the first element that matches.
// If multiple elements satisfy the condition, only the first one is returned/found.
// find() returns undefined if nothing matches.
// findIndex() returns -1 if no matching element is found.
// The methods do NOT modify the original array
const nums= [1,2,3,4,5,6,7,8,9,10];

const x=nums.find((num,idx,nums)=>{
    return num>10;
});
const y=nums.findIndex((num,idx,nums)=>{
    return num>10;
});
console.log(x);
console.log(y);