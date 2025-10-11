"use strict"
const imageEls = document.querySelectorAll(".container img");
const nextBtn = document.querySelector("#next")
const prevBtn = document.querySelector("#prev")
let currentIndex = 0

console.log(imageEls)

nextBtn.addEventListener("click", () => {
    imageEls[currentIndex].classList.remove("show")
    if (currentIndex === imageEls.length - 1) {
        currentIndex = 0
    } else {
        currentIndex++
    }
    imageEls[currentIndex].classList.add("show")
})

prevBtn.addEventListener("click", () => {
    imageEls[currentIndex].classList.remove("show")
    if (currentIndex === 0) {
        currentIndex = imageEls.length - 1
    } else {
        currentIndex--
    }
    imageEls[currentIndex].classList.add("show")
})