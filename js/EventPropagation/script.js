const green = document.querySelector(".green");
const pink = document.querySelector(".pink");
const blue = document.querySelector(".blue");


// event Bubbling
// green.addEventListener("click",(e)=>{
//     console.log("Green Event Listner");
// })
// pink.addEventListener("click",(e)=>{
//     e.stopPropagation();
//     console.log("Pink Event Listner");
// })
// blue.addEventListener("click",(e)=>{
//     console.log("blue Event Listner");
// })





// event Capturing 
green.addEventListener("click",(e)=>{
    console.log("Green Event Listner");
},true)
pink.addEventListener("click",(e)=>{
    console.log("Pink Event Listner");
},true)
blue.addEventListener("click",(e)=>{
    console.log("blue Event Listner");
},true)


// Event Deligation is Pending