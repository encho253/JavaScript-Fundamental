"use strict";

//01. Increase array members
function solve(args) {

    let n = args[0];
    let finalArray = new Array(n);

    for (let i = 0; i < n; i++) {
        finalArray[i] = i * 5;
        console.log(finalArray[i]);
    }
}

//02. Lexicographically comparison
solve(['encho', 'gencho']);

function solve(args) {

    let first = args[0].split('');
    let second = args[1].split('');
    let minLength = Math.min(first.length, second.length);
    let isTrue = true;
    let isFalse = true;

    if (isTrue) {
        for (let i = 0; i < minLength; i++) {
            if (first[i] < second[i]) {
                console.log("<");
                isFalse = false;
                break;
            } else if (first[i] > second[i]) {
                console.log(">");
                isFalse = false;
                break;
            }
        }
    }
    if (isFalse) {
        if (first.length > second.length) {
            console.log(">");
        } else if (first.length < second.length) {
            console.log("<");
        }
    }
    if (first.length == second.length) {
        for (let i = 0; i < minLength; i++) {
            if (first[i] != second[i]) {
                isTrue = false;
            }
        }
        if (isTrue) {
            console.log("=");
        }
    }
}