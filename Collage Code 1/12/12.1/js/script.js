// function a(){
//     function b(){}
// }

// loop (for, while, do while ...)

// for (let i = 1; i <= 5; i++) {
//   //   console.log("Number: " , i);
//   console.log("Number:" + i);
// }

let todo = ["TASK 1", "TASK 2", "TASK 3", "TASK 4", "TASK 5", "TASK 6", "TASK 7"];

// console.log(todo.length)

// for (let i = 0; i < todo.length; i++) {
//   todo[i] += " □";
// }
// console.log(todo);

// let counter = 0;
// while (counter < 10) {
//   console.log(first);
//   counter++;
// }

// do {
//   console.log(first);
// } while (counter > 10);

// let counter2 = 10;
// do{
//     console.log("Do While:" + counter2)
//     counter2--
// } while(counter2 > 10)

todo.forEach(function (todo, i) {
  console.log(todo, i); // i = index (0,1,2,3,4...)
});

let fruits = ["Apple", "Banana", "Orange"];
fruits.push("Grapes");

// fruits.forEach(function(fruits){
//     console.log(fruits)
// })

fruits.forEach((fruits) => {
  return console.log(fruits);
});

fruits.forEach((fruits) => console.log(fruits));

// function add(a, b) {
//   return a + b;
// }

let add = (a, b) => a + b;


console.log(add(4, 4))