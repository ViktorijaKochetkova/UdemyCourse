'use strict';

let numberOfFilms;

function start() {
    numberOfFilms = +prompt("How much movies did you watch?", "");

    while(numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt("How much movies did you watch?", "");
    }
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};



function rememberMyFilms() {
     for (let i = 0; i < 2; i++) {
        let answer1 = prompt("One of the last movies you watched?", "");
        let answer2 = prompt("How much would you rate it?", "");

        if (answer1 != null && answer2 != null && answer1 != '' && answer2 != '' && answer1.length < 50){
            personalMovieDB.movies[answer1] = answer2;
            console.log('done');
        } else {
            console.log('error');
            i--;
        } 
    }
}

rememberMyFilms();


function detectPresonalLevel() {
    if (personalMovieDB.count < 10) {
        console.log("Quite a few films have been watched");
    } else if ( personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log("You are a classic spectator.");
    } else if ( personalMovieDB.count >= 30) {
        console.log("Are you a movie buff?")
    } else {
        console.log("Error");
    }
}

detectPresonalLevel();

function showMyDB ( hidden ){
    if (!hidden) {
        console.log(personalMovieDB);
    }
}

showMyDB(personalMovieDB.privat);

function writeYourGenres() {
    for ( let i = 1; i <= 3; i++) {
        personalMovieDB.genres[i-1] = prompt(`Нour favorite genre is number ${i}`);
    }
}

writeYourGenres();

console.log(personalMovieDB);