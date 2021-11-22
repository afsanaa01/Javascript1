"use strict"

let arr = [17, 39, 25, 916, 248];

let max = arr[0];

for (let i = 0; i < arr.length; i++) {
    if (max < arr[i]) {
        max = arr[i];
    }
}
alert("The biggest number: " + max);