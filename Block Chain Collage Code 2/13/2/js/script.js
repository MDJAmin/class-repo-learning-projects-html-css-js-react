"use strict"

const openBtn = document.querySelector("#open-modal")
const closeBtn = document.querySelector("#close-modal")
const modalEl = document.querySelector(".modal")


openBtn.addEventListener("click",()=>{
    modalEl.classList.add("show")
})

closeBtn.addEventListener("click",()=>{
    modalEl.classList.remove("show")
})