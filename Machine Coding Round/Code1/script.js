console.log("You Have to Create a button and ensure that when bnutton is click promise will resolve");
const btn1 = document.querySelector(".btn1");
const btn2 = document.querySelector(".btn2");
const create = () => {
  return new Promise((res, rej) => {
    btn1.addEventListener("click", () => {
      res("Promise is resolved");
    });
    btn2.addEventListener("click", () => {
      rej("Promise is Reject");
    });
  });
};
const p1 = create();
console.log(p1);
p1.then((data) => {
  console.log("Buton is Clicked:", data);
}).catch((err)=>{
  console.log("Buton is Clicked:", err);
})
