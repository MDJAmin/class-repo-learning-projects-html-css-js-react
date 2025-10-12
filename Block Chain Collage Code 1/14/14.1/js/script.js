// let x = Math.random();
// console.log(x);

// let y = Math.trunc(4.337249);
// console.log(y);

// let z = Math.floor(9.98);
// console.log(z);

// let a = Math.ceil(7.000001)
// console.log(a)

// let b = Math.round(8.6);
// console.log(b);

// let b2 = Math.round(8.4);
// console.log(b2);

// let c = Math.max(5, 12, 8, 25, 1);
// console.log(c);

// let e = Math.min(5, 12, 8, 25, 1);
// console.log(e);

// let f = Math.pow(2, 10);
// console.log(f);

// let q = Math.sqrt(16);
// console.log(q);

// let random = Math.floor(Math.random() * 200 + 1);
// console.log(random);

// ________________________________________________

// setTimeout(() => {
//   console.log(0);
// }, 0); // 3

// console.log(1); // 1

// setTimeout(() => {
//   console.log(2);
// }, 1000); // 5

// setTimeout(() => {
//   console.log(3);
// }, 500); // 4

// console.log(4); // 2

"use strict";
const guessInp = document.querySelector("#guess");
const submitBtn = document.querySelector("#submit");
const resetBtn = document.querySelector("#reset");
const chanceEl = document.querySelector("#chance");
const hintEl = document.querySelector("#hint");
const lastGuessEl = document.querySelector("#showLastNumber");
let chance = 5;
let randomNum = Math.trunc(Math.random() * 20 + 1);

chanceEl.textContent = `chance: ${chance}`;
submitBtn.addEventListener("click", () => {
  chance--;
  chanceEl.textContent = `chance: ${chance}`;
  const value = guessInp.value;
  guessInp.value = "";
  lastGuessEl.textContent += ` ${value}`;
  if (randomNum == value) {
    guessInp.disable = true;
    submitBtn.disable = true;
    hintEl.textContent = "You Winnnnnnn!🎉";
  } else {
    if (chance > 0) {
      if (randomNum > value) {
        hintEl.textContent = "Your Guess is lower than random number";
      } else {
        hintEl.textContent = "Your Guess is higher than random number";
      }
    } else {
      guessInp.disable = true;
      submitBtn.disable = true;
      hintEl.textContent = `you lose, random number was : ${randomNum} 😂🗿`;
    }
  }
});

resetBtn.addEventListener("click", () => {
  guessInp.disable = false;
  submitBtn.disable = false;
  chance = 5;
  chanceEl.textContent = `chance: ${chance}`;
  hintEl.textContent = "";
  lastGuessEl.textContent = "";
  randomNum = Math.trunc(Math.random() * 20 + 1);
});
