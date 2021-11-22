"use strict"

let seasons = prompt("Enter number of season: ")

switch (true) {
    case (seasons == 1):
        alert("Spring")
        break;
    case (seasons == 2):
        alert("Summer")
        break;
    case (seasons == 3):
        alert("Autumn")
        break;
    case (seasons == 4):
        alert("Winter")
        break;
    default:
        alert("There is no season in this number.")
        break;
}
