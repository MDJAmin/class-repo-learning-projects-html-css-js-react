"use strict"

const itemsEl=document.querySelectorAll(".items")

const scrollFunction=()=>{
    const triggerBottom = window.innerHeight * .8
    console.log(triggerBottom)
    for(let i=0;i<itemsEl.length;i++){
        const top=itemsEl[i].getBoundingClientRect().top
        if(top<triggerBottom){
            itemsEl[i].classList.add("show")
        }else{
            itemsEl[i].classList.remove("show")
        }
    }
}
window.addEventListener("scroll",scrollFunction)

scrollFunction()