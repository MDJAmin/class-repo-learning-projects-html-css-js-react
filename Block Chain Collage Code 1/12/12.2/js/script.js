// let titleEl = document.getElementById("title");
let titleEl = document.querySelector(".title");
let desEl = document.querySelector("#description");

let fName = "name";
// let fName = prompt("Enter name:")
titleEl.innerText = fName;
console.log(titleEl);

let txtEl = document.querySelector(".txt");
txtEl.style.color = "red";
txtEl.style.fontWeight = "bold";

let x = prompt("enter color:");
let y = prompt("enter name:");
txtEl.style.color = x;
titleEl.innerText = y;

let listEl = document.querySelector("#list");
let newItem = document.createElement("li");
newItem.innerText = "Grapes";
listEl.appendChild(newItem);
