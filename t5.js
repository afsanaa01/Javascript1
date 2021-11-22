"use strict"

let money = prompt("Enter money which you want: ");
let month = prompt("Enter count of month: ");

let residue = (money % month);

let credit = (money - residue) / month;
let arr = []

for (let row = 1; row < month; row++) {
    for (let i = 1; i <= month; i++) {
        arr[i] = credit;
    }
    console.log(row + "-ci ay " + credit)
}

arr[month] = credit + residue

console.log(month + "-ci ay " +  arr[month])

