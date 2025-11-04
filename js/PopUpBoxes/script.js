// alert
console.log(1);
console.log(2);
alert("This is a Alert popup box");
console.log(3);
// Prompt
function add(a,b){
    console.log(a+b);
}
let a=prompt('Enter Num1:');
let b=prompt("Enter Num2:");
add(a,b);
// confirmation
const confirmBox= confirm("Do You Want to Continue");
if(confirmBox){
    console.log("User Want to Continue");
}else{
    console.log("User Dont Want to Continue");
}