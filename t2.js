"use strict"

let num = prompt("Enter a number: ")

for (let i = 0; i <= num; i++) {
    if (num%i==0){
        console.log(i);
    }   
}