// bill
// tip
// bill >= 100 : tip: 8%
// bill < 100 : tip: 10%
// tip = []
// sum tip
// sum bill
// sum total

// "use strict"
// const bill = [140,180,90,120,40,32];
// let tips = [];
// let totalTip = 0;
// let totalBill = 0;
// for (let i = 0; i < bill.length; i++){
// const amount = bill[i];
// const tip = amount >= 100 ?  amount * 0.08 : amount * 0.10;
// tips.push(tip);
// totalBill += amount;
// totalTip += tip;
// }

// const total = totalBill + totalTip;

// console.log("Tips:", tips)
// console.log("sum tip:", totalTip)
// console.log("total bill:", totalBill)
// console.log("total:", total)

"use strict";

let spinnerValue = 0;
let output = document.querySelector("#output");
let meter = document.querySelector("#meter");
output.innerHTML = spinnerValue;

function plus() {
  if (spinnerValue >= 10) {
    return false;
  }
  if (spinnerValue >= 4) {
    meter.style.background = "rgb(200,200,10)";
    meter.style.filter =
      " drop-shadow(0 0 2px rgb(200,200,10)) drop-shadow(0 10px rgb(200,200,10));";
  }
  if (spinnerValue >= 7) {
    meter.style.background = "#f00";
    meter.style.filter = "drop-shadow(0 0 2px #f00) drop-shadow(0 0 10px #f00)";
  }
output.innerHTML = ++spinnerValue
meter.style.height = spinnerValue * 10 + "%"
}
