// Given an array of integers (which may contain duplicates), write a function to find the sum of all distinct (unique) elements in the array
const uniqueElements = (nums)=>{
    nums.sort((a, b) => a - b);
    let i=0;
    let j=0;
    let n= nums.length;
    let sum=0;
    while(j<n){
        if(nums[i]!=nums[j]) {
            sum+=nums[i];
            i=j;
        }
        j++;
    }
    sum+=nums[j-1];
    console.log(sum);
}
// uniqueElements([1, 2, 2, 3, 4, 4, 5]);
//Remove duplicates from an array without using Set
const uniqueArray =(nums)=>{
    nums.sort((a,b)=>a-b);
    let j=0;
    for(let i=1;i<nums.length;i++){
        if(nums[i]!=nums[j]){
            j++;
            nums[j]=nums[i];
        }
    }
    console.log(nums.slice(0, j + 1));;
}
uniqueArray([1, 2, 2, 3, 4, 4, 5]);
