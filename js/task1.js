const numberOfFilms = +prompt("How much movies did you watch?", "");

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

let answer1 = prompt("One of the last movies you watched?", "");
let answer2 = prompt("How much would you rate it?", "");
let answer3 = prompt("One of the last movies you watched?", "");
let answer4 = prompt("How much would you rate it?", "");

personalMovieDB.movies[answer1] = answer2;
personalMovieDB.movies[answer3] = answer4;

console.log(personalMovieDB);