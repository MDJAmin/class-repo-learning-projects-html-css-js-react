// ECMA international

// ECMAScript === JavaScript

// Template string
const fName = "Amin";
const websiteName = "SpaceX";
const hello = "Hello" + fName + "Welcome to our new" + websiteName + "!🎉";

const hello2 = `hello ${fName} welcome to our new ${websiteName} website !🎉`;

console.log(hello);
console.log(hello2);

// ________________________________________________

let person = { name: "Sara", age: 25 };
let { name, age } = person;
console.log(`${name} is ${age} years old`);
 
 // ________________________________________________
 
//Spread operator
const animals = {
  tiger: 12,
  lion: 8,
  snake: 2,
  owl: 44,
};

// const { tiger, ...rest } = animals;

function objectSpread(p1, p2, p3) {
  console.log(p1);
  console.log(p2);
  console.log(p3);
}

const { tiger, lion, ...rest } = animals;

objectSpread(tiger, lion, rest);

 // ________________________________________________
 
//Data type (Symbols)
let sym1 = Symbol();
let sym2 = Symbol("Amin");
let sym3 = Symbol("Morteza");
let sym4 = Symbol("Morteza");

console.log(sym2 === sym3);
console.log(sym3 === sym4);

// ________________________________________________

//default arguments
function greet(name = "", age = "", pet = "Cat") {
  name = "Amin";
  age = "19";
  return console.log(`Hi ${name} you are ${age} years old and you have a lovely ${pet}`);
}

// ________________________________________________

//Arrow function
function fa(a, b) {
  return a + b;
}

const fa = (a, b) => {
  return a + b;
};

const fa = (a, b) => a + b;

const fa = a => a;

// ________________________________________________

// let & const

// const player = "amin";
// let experience = 100;
// let wizard = false;

// if (experience > 90) {
//    wizard = true;
// }

// console.log(wizard);

// player = "batman"; ❌

// console.log(player);

// const obj = {
//   player: "amin",
//   experience: 100,
//   wizard: false,
// };

// obj = 5 // ❌

// obj.wizard = true; // ✅

// ________________________________________________


// try {

// } catch {

// }

// catch()

// 1)
function fail() {
  try {
    console.log("this works")
    throw new Error("ops!");
    console.log("this works"); 
  } catch (error) {
    // error parameter
    console.log("we have made and error", error);
  }
}

fail(); // we have made and error Error: ops!

// ________________________________________________

// 2)
// function fail() {
//     try {
//         console.log("this works")
//     } catch (error){ // error parameter
//         console.log("we have made and error")
//     }
// }

// fail()

// ________________________________________________

// 3)
function fail() {
  try {
    throw new Error("ops!");
  } catch (error) {
    // error parameter
    console.log("we have made and error", error.massage);
  } finally {
    console.log("this will always run");
    return "returning failed";
  }
  console.log("!!!!!!!! :)");
}

fail();

// ________________________________________________

// function aminAge(age){
//     try{
//         let amin = 18
//         if(isNaN(amin)){
//             throw new Error("age is not valid!")
//         }
//         console.log("Your age:",amin)
//     }catch (error){
//         console.log("error",error.massage)
//     }
// }

// aminAge()

// ________________________________________________

try {
  // This will throw an error because 'x' is not defined
  console.log(x);
} catch (error) {
  console.log("An error occurred:", error.message);
}

// ________________________________________________

async function main() {
  try {
    await x
    await y
  } catch (error) {
    console.log(err);
  }
  console.log("hey!");
}

// ________________________________________________

async function fetchProduct() {
    try {
        const response = await fetch("https://fakestoreapi.com/products")
        if (!response.ok) {
            throw new Error("fetching data was unsuccessful!")
        }
        const data = await response.json();
        console.log("Products:", data)
    } catch (error) {
        console.log("Error:", error.massage)
    }
}

fetchProduct()
