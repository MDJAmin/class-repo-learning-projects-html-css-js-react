// 1.
// const btnEl = document.querySelector(".btn")

// btnEl.addEventListener("click", ()=>{
//     alert("btn clicked!")
// })

// 2.
"use strick";
const openEl = document.querySelector("#open-modal");
const closeEl = document.querySelector("#close-modal");
const modalEl = document.querySelector(".modal");

openEl.addEventListener("click", () => {
  modalEl.classList.add("show");
});

closeEl.addEventListener("click", () => {
  modalEl.classList.remove("show");
});

setTimeout(() => {
  modalEl.classList.remove("show");
}, 5000);
