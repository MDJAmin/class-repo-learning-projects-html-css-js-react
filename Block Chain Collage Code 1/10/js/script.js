"use strict";

// Condition

// condition ? x : y
// 10 < 8 ? x : y // y
// 10 > 8 ? x : y // x

// const a = 1
// const b = 2
// const a = +prompt("Enter a")
// const b = +prompt("Enter b")
// let result = (a + b < 4) ? "Blow" : "Over"
// alert(result)

// let login = prompt("Enter your role", "superAdmin or Admin or User");
// let massage =
//   login === "superAdmin"
//     ? "Welcome superAdmin! ☀"
//     : login == "Admin"
//     ? "Welcome Admin! ☁"
//     : login == "User"
//     ? "Welcome User! ☀"
//     : "";

//     alert(massage)

// Array:

// let animalArray=["Cat", "Dog","Rhino","Toto"]
// console.log(animalArray[0])

// let listOfNumber=[1,2,3,4,99,866,34]
// console.log(listOfNumber[6])

// let boolianList=[true,false,true]

// let mixedList=["Hello",56,false,function wl(){},{},["12",313],null,undefined]

// console.log(mixedList)

// let myArray=[
//     ["1","2","3"],
//     ["4","5","6"],
//     ["7","8","9"]
// ]

// console.log(myArray[1][1])
// console.log(myArray[2][2])

// let nameArray = ["Catayon", "Amin","Danial", "Batman", "Reza"];
// console.log("animalArray:", animalArray);
// animalArray.shift();
// console.log("shift:", animalArray);
// animalArray.pop();
// console.log("pop:", animalArray);
// animalArray.push("Tiger");
// console.log("push:", animalArray);
// let newList = animalArray.concat(["Snake", "Bird"], ["hello"]);
// console.log(newList);

// console.log("Rhino index:", animalArray.indexOf("Bird"));

// nameArray.sort();
// console.log("Sorted Array:", nameArray);

// Object :

// let Array = [
//     0: "19"
//     1: "Amin"
//     2: "Read Novel"
//     ...
// ]

// let user1 = ["Amin", "Read Novel", 19];

// let user2 = {
//   fName: "Amin",
//   age: "19",
//   hobby: "Read Novel",
// };
// let user3 = {
//   fName: "Ali",
//   age: "19",
//   skills: ["Writing", "Design"],
// };

// console.log(user2.hobby);
// console.log(user2.age);
// console.log(user3.skills[1]);

// user2.favoritePet = "Cat";
// console.log(user2);

// user2.fName = "Mohammad Amin";
// console.log(user2);

// const list = [
//   { username: "a1", password: "abcd" },
//   { username: "a2", password: "1234" },
//   { username: "a3", password: "dwviheqrgi4h8935" }
// ];
// console.log(list)
// console.log(list[1].password)

// let emptyObj = {};

// console.log(emptyObj);

// // emptyObj.

// let nullObj = null;

// emptyObj.name = "amin";
// console.log(emptyObj);

// nullObj.name = "amin";

// Destructuring (ES6+)

// const player = object.player
// const name = object.name

// const {player, name} = object

// const playerObject = {
//   wizard: "Merlin",
//   age: "999",
//   inAlive: true,
// };

// // const wizard = playerObject.wizard
// // const age = playerObject.age

// const { wizard, age } = playerObject;

// console.log(wizard);


// const fullName = "full name"
// const obj2 = {
//     [fullName]:"amin",
//     [5+5]:"ten"
// }

// console.log(obj2)


const a = "Simon"
const b = false
const c = {}
const object5 = {
    // a:a,
    // b:b,
    // c:c
    a,
    b,
    c
}

console.log(object5)