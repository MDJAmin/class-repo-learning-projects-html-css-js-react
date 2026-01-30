// "use strict";

// const products = {
//   1: {
//     img: "",

//   },
//   2: {
//     img: "",

//   },
//   3: {
//     img: "1342422",
//     name:"",
//     description:"",
//     // ...
//   },
//   4: {
//     img: "",

//   },
//   5: {
//     img: "",

//   },
// };

// // functions

// console.log("Hello") // method

// alert()
// prompt()

// function sayHello(){
// console.log("Hello world!")
// }

// sayHello()

// // (a,b)

// const saySomething = function(){
//     console.log("WDHVUWIDHVJBEROBJBRE")
// }

// saySomething()

// const sayHi = function Hi() {
//   console.log("hi");
// };

// console.log(sayHi());
// console.log(Hi());

// var object1 = {};
// let object2 = {
//   hi: "hello",
// };

// const object3 = {
//   hi: "hello",
// };

// console.log((object2.hi = "HIIIIIII"));
// console.log((object3.hi = "HIIIIIII"));

// const name = prompt()

// const sayHi = function (name) {
//   console.log("Hi " + name);
//   return true
// };

// console.log(sayHi(name))

// function multiply(a, b) {
//   console.log("a:", a, "b:", b);
//   //   const c = a * b;
//   console.log(a * b);
//   //   return c
// }

// // multiply(2, 5)
// multiply("2", "5");

// function multiply2(x, y) {
//   if (x > 10 || y > 10) {
//     return("a or b is greater than 10")
//   } else {
//     return x * y;
//   }
// }

// console.log(multiply2(10,4))

// const user = {
//   name: "amin",
//   password: "12345",
// };

// function karbar(name, password) {
//   if (name == user.name && password == user.password) {
//     // console.log("welcome");
//     return "welcome";
//   } else {
//     // console.log("try again");
//     return "try again";
//   }
// }
// console.log(karbar("amin",12345));

// function scoreCheck(score) {
//   if (score === 100) {
//     return "S 🎉";
//   } else if (score >= 80) {
//     return "A 🧠";
//   } else if (score >= 60) {
//     return "B 🎈";
//   } else if (score >= 40) {
//     return "C 😐";
//   } else if (score >= 20) {
//     return "D 🤬";
//   }
// }

// // console.log(scoreCheck(100))

// let score = +prompt("score")
// console.log(scoreCheck(score))

// let score1 = prompt("score 1")

// console.log(typeof score)
// console.log(typeof score1)

// let character = {
//   name: "Marlin",
//   age: "999",
//   gender: "male",
//   hobby: "Read Book",
//   alive: true,
//   spell: ["Thunder bolt ⚡", "Fire ball 🔥", "Heal ➕"],
//   ThunderSpell: function () {
//     alert(character.name + " Cast " + character.spell[0] + "Spell!");
//     return true;
//   },
// };

// console.log(character.ThunderSpell());

// let student = {
//   name: "amir",
//   age: "18",
//   skills: ["HTML", "CSS", "JS"],
//   introduction: function () {
//     alert("Hello I'm " + this.name);
//     return true;
//   },
// };

// console.log(student.introduction());

function add(a, b) {
  return a + b;
}

let addTwo = add.bind(null, 2)
console.log(addTwo(5))

let addThree = add.bind(null,9)
console.log(addThree(1))

const add = (a,b) => a + b;

let add2 = a => a
add(a,b)

const multiply = (a,b,c) => a * b * c
const multiplyTwo = multiply.bind(null,2)
console.log(multiplyTwo(4,8))

