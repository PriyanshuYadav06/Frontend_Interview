// function multiply(x,y,z){
//     return x*y*z;
// }
// // Curried Function
// function multiply(x){
//     return function(y){
//         return function(z){
//             return x*y*z;
//         }
//     }
// }
// const x1 = multiply(2);
// const x2=x1(3);
// const x3=x2(3);
// console.log(x3);
// // we can directly write like this
// console.log(multiply(2)(3)(3));

// Infinite Currying
function multiply(x){
    return function (y){
        if(y) return multiply(x*y);
        return x;
    }
}
console.log(multiply(1)(2)(3)(4)())