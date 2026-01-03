// Array(5)

// let listOfAnimals = ["Cat", "Dog", "Bird", "Fox", "Wolf"];
// console.log(listOfAnimals[1]);

// let listOfNumbers = [1, 4, 6, 8, 2, 536, 35, 43];
// let listOfBooleans = [true, false, true, true];
// let listOfObj = [
//   {
//     name: "amin",
//     age: "19",
//   },
//   { name: "mahdi" },
//   { name: "yasin" },
//   { name: "erfan" },
// ];

// // console.log(listOfObj[2])
// let listOfArray = [
//   [12, 1413, 421],
//   ["g", "h", "y"],
//   [true, {}, "5", 75],
// ];

// console.log(listOfArray[0][2]);

// let listOfFunctions = [function work1() {}, function work2() {}];

// let arrayList = [
//   ["w0", "w1", " w2 "],
//   ["w3", "w4", "w5", ["8", 9, 7]],
//   ["w6", "w7", ["hello ", "good bye"], "w8"],
//   ["w16", "w2", "w45"],
// ];

// console.log(arrayList[2][2][0] + arrayList[1][3][0] + arrayList[0][2] + arrayList[2][2][1]);


let listOfAnimals = ["Cat", "Dog","Bird", "Rhino", "Wolf"];

// console.log("All animals:", listOfAnimals)
// listOfAnimals.shift()
// console.log("Remove first el:",listOfAnimals)
// listOfAnimals.pop()
// console.log("Remove last el:",listOfAnimals)
// listOfAnimals.push("Bird")
// console.log("add el:",listOfAnimals)

let newListOfAnimals = listOfAnimals.concat(["snake","Fox"])
console.log("newListOfAnimals",newListOfAnimals)

console.log(newListOfAnimals.indexOf("wewbetgrnhf"))


listOfAnimals.sort()
console.log("sorted list:", listOfAnimals)