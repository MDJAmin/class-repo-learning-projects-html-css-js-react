// "use strict";

// // Object

// const obj = {};

// // let Array = [
// //     "0":"19",
// //     "1":"Amin",
// //     "2":"Dev"
// // ]

// let user1 = ["Amin", "19", "Dev"];

// let user2 = {
//   fName: "Amin",
//   age: "19",
//   job: "Dev",
// };

// let user3 = {
//   fName: "Mahdi",
//   age: "18",
//   job: "Student",
//   skills: ["cook", "drive"],
// };

// console.log(user2.fName);
// console.log(user3.skills[1]);

// console.log(user2.favPet);

// user2.favPet = "Cat";

// console.log(user2.favPet);

// console.log(user3);

// const list = [
//   { username: "a1", password: "abcd" },
//   { username: "a2", password: "1234", skills: ["cook", "drive"] },
//   { username: "a3", password: "korwihg9r02j93pv284toijev" },
// ];

// console.log(list);
// console.log(list[1].password);

// let emptyObj = {};

// console.log(emptyObj)

// emptyObj.name = "Amin"

// console.log(emptyObj)

// const object = {
//   player: "1",
//   name: "amin",
// };

// // const player = object.player
// // const name = object.name

// // const { player, name } = object;

// const playerObject = {
//   Wizard: "Merlin",
//   age: 999,
//   hobby: "Read book",
// };

// const { Wizard, hobby } = playerObject;
// console.log(Wizard);

// const fullName = "Full Name";
// // const fullName = prompt("name of the key")
// const obj = {
//   [fullName]: "Amin",
//   [10 + 9]: "age",
// };
// console.log(obj);

const a = "Amin";
const b = true;
const c = {};
const obj3 = {

//   name: a,

//   a: a,
//   b: b,
//   c: c,

  a,
  b,
  c

};

console.log(b);


const objectInObject={
    number:1,
    obj1:{
        name:"amin",
        age:19,
        skills:{
            local:"drive",
            hardSkills:"dev and design",
            softSkills:"convincing",
        }
    },
}

console.log(objectInObject.obj1.skills.hardSkills)