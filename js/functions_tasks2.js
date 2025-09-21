"use strict";

function calculateVolumeAndArea(edge) {
    if (typeof edge !== 'number' || !Number.isInteger(edge) || edge <= 0){
        return `При вычислении произошла ошибка`;
    }
    let volume = edge * edge * edge;
    let area = edge * edge;
    return `Объем куба: ${volume}, площадь всей поверхности: ${area}`;
}

edge = +prompt("Please enter the number of your cube`s edge: ", '');
calculateVolumeAndArea(edge);