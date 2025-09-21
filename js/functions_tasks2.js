"use strict";

//Task 1

// function calculateVolumeAndArea(cubeEdge) {
//     if (typeof cubeEdge !== 'number' || !Number.isInteger(cubeEdge) || cubeEdge <= 0){
//         return `An error occurred while calculating`;
//     }
//     let volume = cubeEdge * cubeEdge * cubeEdge;
//     let area = 6 * (cubeEdge * cubeEdge);
//     return `Volume of a cube: ${volume}, total surface area: ${area}`;
// }

// let cubeEdge = +prompt("Please enter the size of the cube edge", '');
// alert(calculateVolumeAndArea(cubeEdge));

// Task 2

function getCoupeNumber(seatNumber) {
    if (typeof (seatNumber) !== 'number' || !Number.isInteger(seatNumber) || seatNumber < 0){
        return `Error. Please check that the seat number you entered is correct.`;
    }
        if (seatNumber === 0 || seatNumber > 36) {
        return "There are no such seats in the carriage";
        }

    return Math.ceil(seatNumber / 4);
}

let seatNumber = +prompt("Please enter the number of your seat: ");
// alert(getCoupeNumber(seatNumber));
getCoupeNumber(33);
