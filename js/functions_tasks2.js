"use strict";

//Task 1

function calculateVolumeAndArea(cubeEdge) {
    if (typeof cubeEdge !== 'number' || !Number.isInteger(cubeEdge) || cubeEdge <= 0){
        return `An error occurred while calculating`;
    }
    let volume = cubeEdge * cubeEdge * cubeEdge;
    let area = 6 * (cubeEdge * cubeEdge);
    return `Volume of a cube: ${volume}, total surface area: ${area}`;
}

let cubeEdge = +prompt("Please enter the size of the cube edge", '');
alert(calculateVolumeAndArea(cubeEdge));