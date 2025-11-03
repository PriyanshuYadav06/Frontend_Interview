// link: https://youtu.be/cb0m-InFZ20?si=aRXESXvrbn3Cgaom
// const merge = (str1,str2)=>{
//     let l1=str1.length;
//     let l2=str2.length;
//     let str3="";
//     let mini={};
//     let maxi={};
//     if(l1>l2){
//         mini={ str:str2,len:l2};
//         maxi = { str: str1, len: l1 };

//     }else{
//        mini = { str: str1, len: l1 };
//         maxi = { str: str2, len: l2 };
//     }
//     for(let i=0;i<mini.len;i++){
//         str3+=str1[i];
//         str3+=str2[i];
//     }
//     for(let i=mini.len;i<maxi.len;i++){
//         str3+=maxi.str[i];
//     }
//     console.log(str3);
// }
// merge("abc", "12345"); 


// const longestWord = (str)=>{
//     let j=0;
//     let ans ='';
//     let maxi =-1;
//     for(let i=0;i<str.length;i++){
//         let j=i;
//         while(j<str.length && str[j]!=' ') j++;
//         if(j-i+1>maxi){
//             ans=str.slice(i,j);
//             maxi=j-i+1;
//         }
//         i=j;
//     }
//     console.log(ans);
// }

// longestWord("My Name is Priyanshu Yadav");


// console.log(2-"2");


// let arr =[[1,2],[3,4],[5,6],[7,8]];
// const nums=[];
// for(let sub of arr){
//     for(let num of sub){
//         nums.push(num);
//     }
// }
// console.log(nums);


// Example of Currying

// Will continue Next Day