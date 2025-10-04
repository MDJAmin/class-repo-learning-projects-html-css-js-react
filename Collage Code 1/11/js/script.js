// "use strict"
//Function

//alert()
//prompt()

// f(x,y,z,q,u,y)

// ()

// const a = prompt("Enter a","15")

// 1. Normal function
// function sayHello(){
//     "use strict"
//     console.log("Hello!")
// }

// sayHello()

// 2. Function expression

// const syGoodBye = function(){
//     console.log("GoodBye!")
// }

// console.log("Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo itaque, magnam modi dolor placeat repudiandae ipsum sapiente non impedit deserunt quibusdam a esse velit aspernatur cupiditate, animi quaerat fugit ipsam.")
// console.log("Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo itaque, magnam modi dolor placeat repudiandae ipsum sapiente non impedit deserunt quibusdam a esse velit aspernatur cupiditate, animi quaerat fugit ipsam.")
// console.log("Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo itaque, magnam modi dolor placeat repudiandae ipsum sapiente non impedit deserunt quibusdam a esse velit aspernatur cupiditate, animi quaerat fugit ipsam.")
// console.log("Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo itaque, magnam modi dolor placeat repudiandae ipsum sapiente non impedit deserunt quibusdam a esse velit aspernatur cupiditate, animi quaerat fugit ipsam.")
// console.log("Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo itaque, magnam modi dolor placeat repudiandae ipsum sapiente non impedit deserunt quibusdam a esse velit aspernatur cupiditate, animi quaerat fugit ipsam.")
// console.log("Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo itaque, magnam modi dolor placeat repudiandae ipsum sapiente non impedit deserunt quibusdam a esse velit aspernatur cupiditate, animi quaerat fugit ipsam.")

// function lorem(){
//     console.log("Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo itaque, magnam modi dolor placeat repudiandae ipsum sapiente non impedit deserunt quibusdam a esse velit aspernatur cupiditate, animi quaerat fugit ipsam.")
// }

// lorem()
// lorem()
// lorem()
// lorem()
// lorem()
// lorem()

// const syGoodBye = function bye(){
//     console.log("GoodBye!")
// }

// console.log(syGoodBye())

// 3. function with argument

// const name = prompt("")

// const sayHi = function (name) {
//   console.log("Hello " + name);
// };

// const fName = prompt("");

// sayHi(fName);

// 4. more argument

// const a = 5
// const b = 2

// function multiply(a, b) {
//   console.log("a:", a, "b:", b);
//   return a * b;
//   //   return b
// }

// console.log(multiply(5, 5));

// function multiply2(x, y) {
//   if (x > 10 || y > 10) {
//     return "a or b is bigger than 10";
//   } else {
//     return x * y;
//   }
// } // ternery operator

// console.log(multiply2(5, 10));

// function scoreCheck(score) {
//   if (score === 100) {
//     return "S: 😍";
//   } else if (score >= 80) {
//     return "A: 🤯";
//   } else if (score >= 60) {
//     return "B: 👀";
//   } else if (score >= 40) {
//     return "C: 👩‍🌾";
//   } else if (score >= 20) {
//     return "F: 🤬";
//   } else {
//     return "❌";
//   }
// }

// let score = +prompt("Enter Your Score:");
// alert(scoreCheck(score));

// function wizard(){

// }

// let wizard = {
//   name: "ron",
//   age: "12",
//   gender: "male",
//   hobby: "read book",
//   spell: ["Thuner ⚡", "Fire ball 🔥", "Heal ➕"],
//   callSpell: function () {
//     console.log(wizard.name + " Cast " + wizard.spell[1] + " Spell ");
//     return true;
//   },
// };

// console.log(wizard.callSpell())

// console.log(console)

let student = {
  fName: "Jhon",
  lName: "Wick",
  skill: ["HTML", "CSS", "JS"],
  introduce: function () {
    console.log("Hi, I'am", this.fName, this.lName);
  },
};
console.log(student.introduce())