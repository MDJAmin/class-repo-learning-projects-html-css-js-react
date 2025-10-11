"use strict"
const openBtn = document.querySelector("#open-modal")
const closeBtn = document.querySelector("#close-modal")
const modalEl = document.querySelector(".modal")

openBtn.addEventListener("click", function () {
    modalEl.classList.add("show")
})

closeBtn.addEventListener("click", () => {
    modalEl.classList.remove("show")
})

// setTimeout(
//     () => {
//         modalEl.classList.add("show")
//     }, 1000
// )

setTimeout(
    () => {
        modalEl.classList.remove("show")
    }, 5000
)