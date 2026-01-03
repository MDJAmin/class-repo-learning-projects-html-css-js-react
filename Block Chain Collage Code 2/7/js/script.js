"use strict";

// console.log(10 + 5)
// console.log(10 - 5)
// console.log(10 / 5)
// console.log(10 * 5)
// console.log(10 ** 5)
// // pow
// // ^
// console.log(10 % 5)

// console.log(10 + "10"); // 1010
// console.log(10 + "Hello"); // 10Hello
// console.log(10 - "5");
// console.log(10 - "Hello");
// console.log(10 * "Hello");
// console.log(10 / "Hello");

// console.log(10 + "60");
// console.log(10 + "60" + 15);
// console.log(10 + "60" + 15 - "10");
// console.log(10 + "60" + 15 - "10" * 2);
// console.log(10 + "60" + 15 - "10" * 2 + "1");

// console.log((10 + 5) * 2)

// const sum = prompt()

// console.log(5 > 2) // boolean
// console.log(5 < 2)
// console.log(5 <= 5)
// console.log(5 < 5)
// console.log(5 >= 2)
// console.log(5 == 2)
// console.log(5 == 5)

// console.log(5 === 2)
// console.log(5 === 5)

// const target1 = "8"
// const target2 = 8

// console.log(target1 === target2)
// console.log(target1 == target2)

// console.log(5 !== 5);
// console.log(5 !== 10);
// console.log(5 !== "Hello");
// console.log("Hello" !== "Hello");

// let plus = 5;
// console.log(plus++);
// console.log(plus + 10);
// console.log(plus--);

// let num = plus + 10
// console.log(num)

// let number = +prompt("Enter Number:");
// if (number % 2 === 0) {
//   console.log("Even");
// } else {
//   console.log("odd");
// }
// console.log(typeof number);

// if (4 + "3" === 7) {
//   console.log("perfect!");
// } else {
//   console.log("wrong");
// }

// console.log(4 + "3" === 7);

// const a = "hello";
// console.log((a += "hi"));

// const
// let b
// var a

// console.log(!false)
// console.log(!true)

// var batman = "✅";
// if (!(batman === "❌")) {
//   console.log("I'm batman");
// } else {
//   console.log("I'm not batman");
// }

// console.log();

// const massage = "Hello world!";

// alert(massage);

// // ||
// // &&
// alert(null || 2 || undefined);
// alert(1 && null && 2);

// let age = +prompt("Enter you'r age:");
// if (age >= 18 && age <= 60) {
//   alert("Welcome");
// } else {
//   alert("You can't enter");
// }

// let number = +prompt("enter num");
// let numberChecker = number >= 10 ? "grater than 10" : "lower than 10";
// alert(numberChecker)

let number = +prompt("Enter you'r number:");
let output = number === 100 ? "Perfect score!" : number === 80 ? "Good score" : "end";
console.log(output)