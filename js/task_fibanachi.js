"use strict";

function fib(num) {
    if(typeof(num) !== 'number' || num <= 0 ||!Number.isInteger(num)){
        return '';
    }
    let res = '';
    let first = 0;
    let second = 1;

    for ( let i = 0; i < num; i++){
        if ( i + 1 === num ){
            res += `${first}`;
        } else {
            res += `${first} `;
        }

        let third = first + second;
        first = second;
        second = third;
    }

    return res;
}

fib(5)