"use strict";

// // const numberOfFilms = +prompt("How much movies did you watch?", "");

// // const personalMovieDB = {
// //     count: numberOfFilms,
// //     movies: {},
// //     actors: {},
// //     genres: [],
// //     privat: false
// // };

// // let answer1 = prompt("One of the last movies you watched?", "");
// // let answer2 = prompt("How much would you rate it?", "");
// // let answer3 = prompt("One of the last movies you watched?", "");
// // let answer4 = prompt("How much would you rate it?", "");

// // personalMovieDB.movies[answer1] = answer2;
// // personalMovieDB.movies[answer3] = answer4;

// // console.log(personalMovieDB);

// //     for (let i = 5; i <= 10; i++) {
// //         console.log(i);
// //     }
// // for(let i = 20; i >= 10; i--){
// //         console.log(i);
// //         if (i === 13) {
// //             break;
// //         }
// //     }


// // const arr = [3, 5, 8, 16, 20, 23, 50];
// // const result = [];

// // for ( let  i = 0; i < arr.length; i++){
// //     result[i] = arr[i];
// // }

// //     return result;
// // function secondTask() {
// //     // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
// // const data = [5, 10, 'Shopping', 20, 'Homework'];

// // for ( let i = 0; i < data.length; i++){
// //     if ( typeof data[i] === "string" ){
// //         data[i] = data[i] + " - done";
// //     } else {
// //         data[i] = data[i] * 2;
// //     }
// // }
    
    
// //     // Не трогаем
// //     return data;
// // }

// // const data = [5, 10, 'Shopping', 20, 'Homework'];
// // const result = [];

// // for ( let i = 0; i <data.length; i++){
// //     result[i] = data[data.length - 1 - i];
   
// // }
// //  console.log(result);

// // const lines = 5;
// // let result = '';

// // for (let i = 0; i < lines; i++) {
    
// //     for (let j = 0; j < lines - i - 1; j++) {
// //         result += ' ';
// //     }
    
// //     for (let k = 0; k < 2 * i + 1; k++) {
// //         result += '*';
// //     }
// //     result += '\n'; 
// // }

// // console.log(result);

const numberOfFilms = +prompt("How much movies did you watch?", "");

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

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

if (personalMovieDB.count < 10) {
    console.log("Quite a few films have been watched");
} else if ( personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log("You are a classic spectator.");
} else if ( personalMovieDB.count >= 30) {
    console.log("Are you a movie buff?")
} else {
    console.log("Error");
}

console.log(personalMovieDB);

function sayHello(name) {
    return `Hello, ${name}`;
}
sayHello('Anton');

function returnNeighboringNumbers(num) {
    array = [num - 1, num, num + 1];
    console.log(array);
    
}
returnNeighboringNumbers(5);

function getMathResult(repeat, increaser) {
    if (typeof increaser != 'number' || increaser <= 0){
        return repeat;
    }
    
    let result = '';

    for (let i = 1; i <= increaser; i++){
        result += repeat * i;
        if (i < increaser) {
            result += `---`;
        }
    }
    return result;
}
getMathResult(3,10);

