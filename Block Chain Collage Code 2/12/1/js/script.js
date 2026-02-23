"use strict";

// var

// const

// let

// var name;
// var name;

// let name = "Amin";
// let name = "Amin";

// console.log(name);

// console.log()

// let title = document.getElementsByClassName
let title = document.getElementById("title");

console.log(title);

// Object.name="amin"

title.innerText = "Hello World!";

// .Text

// #Title

// let text = document.querySelector(".Text");

// text.style.color = "blue";

// text.style.fontWeight = "Bold";
// text.style.fontStyle = "Italic";

// let list = document.querySelector(".listItems")
let list = document.querySelector("#list");

let newItem = document.createElement("li");

newItem.innerText = "Orange";

// console.log(newItem)

list.appendChild(newItem);

let div = document.getElementById("content");

div.innerHTML = "<h4>Lorem ipsum dolor sit.</h4>"


let paragraphs = document.querySelectorAll("p")

console.log(paragraphs)

paragraphs.forEach(p=>{
    p.style.color="Red"
})