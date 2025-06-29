// let friends = ["Ali","Amin","Amir","Parsa"];
// let items = ["Ali",false,3];
// console.log(friends[friends.length - 2])
// friends[1] = "Alireza"
// console.log(friends[1])

// friends.push("Javad")
// console.log(friends)

// friends.unshift("Amin")
// console.log(friends)

// let removeEl = friends.pop();
// console.log(friends)

// friends.shift();
// console.log(friends)

// console.log(friends.indexOf("Alireza"))
// console.log(friends.indexOf("Ali"))
// console.log(friends.indexOf("djviwdjvqe"))
// console.log(friends.includes("Ali"))
// console.log(friends.includes("djviwdjvqe"))


// let friends = ["Ali", "Amin", "Amir", "Parsa"];

// let inp = prompt("Enter friends name")

// if (friends.includes(inp)) {
//     alert(`${inp} is your friend`)
// } else {
//     alert(`${inp} is not your friend`)
// }

// for(let i = 0; i < 5; i++){
//     console.log(i)
// }

// let i = 0;
// while(i > 5){
//     console.log(i)
//     i++
// }

// let i = 0;
// do {
// console.log(i)
// i++
// }while(i < 5)

// const arr = ["a","b","c"]
// for (const item of arr){
//     console.log(item)
// }
// console.log(arr)

// const number = [1,2,3];
// const double = number.map(n => n * 2); 
// console.log(double)

// const number = [1,2,3,4,5,6];
// const even = number.filter(n => n % 2 == 0);
// console.log(even)

// for (let i = 1; i <= 9; i++){
//     console.log(`number: ${i}`)
// }


// let friends = ["Ali", "Amin", "Amir", "Parsa"];

// for (let i = 0; i < friends.length; i++){
//     console.log(friends[i])
// }


// const aminInformation = {
//     firstName: "M.Amin",
//     lastName: "JF",
//     birthYear: 2006,
//     jobTitle: "Developer",
//     liveInIran: true,
//     friends: ["Ali", "Amir", "Parsa"]
// }

// console.log(aminInformation.birthYear)

// const x = prompt("enter")
// alert(aminInformation[x + "Name"])
// alert(aminInformation.location)

// aminInformation.jobTitle = "Designer"
// console.log(aminInformation.jobTitle)

// aminInformation.location = "Mashhad";
// console.log(aminInformation.location)

// const y = prompt("Enter you key")
// alert(aminInformation[y])

const obj = {a: 1, b: 2, c: 3};
for (const key in obj){
    console.log(key, obj[key])
}