"use strict";

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
