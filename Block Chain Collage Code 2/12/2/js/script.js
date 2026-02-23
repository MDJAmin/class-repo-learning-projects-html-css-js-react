let title = document.querySelector("#title");
title.style.color = "rEd";
title.innerText = "Hello World!";

const mainContent = document.querySelector(".mainContent");

const navbarEl = document.querySelector("#navbar");

const linkEl = document.querySelectorAll(".link");

const divEl = document.querySelectorAll(".div");

console.log(linkEl, divEl);

navbarEl.style.backgroundColor = "red";
navbarEl.style.margin = "20px";
navbarEl.style.display = "flex";
navbarEl.style.borderRadius = "16px";

linkEl[2].textContent = "Product";
linkEl[3].textContent = "Product detail";

for (let i = 0; i < linkEl.length; i++) {
    linkEl[i].textContent += " Page"
    linkEl[i].classList.add("dark")
    linkEl[i].classList.remove("link")
}
