"use strict";

function calculateVolumeAndArea(cubeEdge) {
    if (typeof cubeEdge !== 'number' || !Number.isInteger(cubeEdge) || cubeEdge <= 0){
        return `При вычислении произошла ошибка`;
    }
    let volume = cubeEdge * cubeEdge * cubeEdge;
    let area = 6 * (cubeEdge * cubeEdge);
    return `Объем куба: ${volume}, площадь всей поверхности: ${area}`;
}

let cubeEdge = +prompt("Please enter the number of your cube`s edge: ", '');
alert(calculateVolumeAndArea(cubeEdge));