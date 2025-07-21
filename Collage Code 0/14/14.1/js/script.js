"use strict"

// class Car {
//     constructor(brand, color) {
//         this.brand = brand
//         this.color = color
//     }
//     hook() {
//         console.log(`The brand is ${this.brand} with ${this.color} color! `)
//     }
// }

// const carEl = new Car("BMW", "Black")
// carEl.hook()


// // const numbers = [10, 20, 30]
// // const [a, b, c] = numbers

// // console.log(a)
// // console.log(b)
// // console.log(c)

// const [a, b, c] = [1, ,]
// console.log(c)
// console.log(a)

// // console.log(typeof(null))
// // console.log(typeof(undefined))
// // console.log(typeof(NaN))

// const numbers = [10, 20, 30, 40]
// const [first, , third] = numbers
// console.log(first)
// console.log(third)

// const [x = 1, y = 2, z = 3] = [100,99]
// console.log(x)
// console.log(y)
// console.log(z)

// const [head, ...ahmad] = [1,2,3,4,5]

// console.log(head)
// console.log(ahmad)

// const idCard = [
//     ["fName", "Amin"],
//     ["lName", "JF"],
//     ["age", "18"]
// ]


// for (const [key, value] of idCard) {
//     console.log(`${key}: ${value}`)
// }


// const arr1 = [1,2]
// const arr2 = [3,4]

// const combined = [...arr1, ...arr2];

// console.log(combined)

// const user = { name: "amin", age: 25 }
// const copyUser = { ...user }

// console.log(copyUser)

function sum(a, b, c) {
    return a + b + c
}

const nums = [1, 2, 3] 

console.log(sum(...nums))


