// bill 
// tip 
// bill >= 100 : tip: 8%
// bill < 100 : tip: 10%
// tip = []
// sum tip 
// sum bill 
// sum total

"use strict"
const bill = [140,180,90,120,40,32];
let tips = [];
let totalTip = 0;
let totalBill = 0; 
for (let i = 0; i < bill.length; i++){
const amount = bill[i];
const tip = amount >= 100 ?  amount * 0.08 : amount * 0.10;
tips.push(tip);
totalBill += amount;
totalTip += tip;
}

const total = totalBill + totalTip;

console.log("Tips:", tips)
console.log("sum tip:", totalTip)
console.log("total bill:", totalBill)
console.log("total:", total)
