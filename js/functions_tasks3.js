"use strict";

//Task 1

function getTimeFromMinutes(num) {
    if ( typeof(num) !== "number" || !Number.isInteger(num) || num < 0){
        return `Ошибка, проверьте данные`;
    }
    let hours =  Math.floor(num / 60);
    let mins = num % 60;

    let timeToShow;
    if ( hours === 1) {
        timeToShow = "час";
    } else if ( hours >= 2 && hours <= 4) {
        timeToShow = "часа"
    } else {
        timeToShow = "часов"
    }
return `Это ${hours} ${timeToShow} и ${mins} минут`;
}

let num = +prompt("Enter minutes: ");
alert(getTimeFromMinutes(num));

//Task 2

function findMaxNumber(num1, num2, num3, num4) {

    if  (typeof(num1) !== 'number' ||
        typeof(num2) !== 'number' ||
        typeof(num3) !== 'number' ||
        typeof(num4) !== 'number'){
        return 0;
    }
const num = [num1, num2, num3, num4];
return Math.max(...num);
}
let num1 = +prompt("Enter number 1: ");
let num2 = +prompt("Enter number 2: ");
let num3 = +prompt("Enter number 3: ");
let num4 = +prompt("Enter number 4: ");
alert(findMaxNumber(num1, num2, num3, num4));