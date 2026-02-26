"use strict"

const guessInp = document.querySelector("#guess")
const submitBtn = document.querySelector("#submit")
const resetBtn = document.querySelector("#reset")
const chanceEl = document.querySelector("#chance")
const hintEl = document.querySelector("#hint")
const lastGuessEl = document.querySelector("#showLastNumber")


let chance = 5;
let randomNum = Math.trunc(Math.random() * 20 + 1)

chanceEl.textContent = `chance: ${chance}`;

submitBtn.addEventListener("click", () => {

    chance--;
    chanceEl.textContent = `chance: ${chance}`
    const value = guessInp.value
    guessInp.value = ""
    lastGuessEl.textContent += ` ${value},`
    
    if (randomNum == value) {
        guessInp.disable = true
        submitBtn.disable = true
        hintEl.textContent = "You Winnnnnnn!🎉"
    } else {
        if (chance > 0) {
            if (randomNum > value) {
                hintEl.textContent = "Your Guess is lower than random number";
            } else {
                hintEl.textContent = "Your Guess is higher than random number";
            }
        } else {
            guessInp.disable = true
            submitBtn.disable = true
            hintEl.textContent = `you lose, random number was : ${randomNum} 😂🗿`
        }
    }
})


resetBtn.addEventListener("click", () => {
    guessInp.disable = false
    submitBtn.disable = false
    chance = 5
    chanceEl.textContent = `chance: ${chance}`
    hintEl.textContent=""
    lastGuessEl.textContent=""
    randomNum = Math.trunc(Math.random() * 20 + 1)
})

