'use strict'

// 01. Increase array members
function solve(args) {
    let n = args[0]
    let finalArray = new Array(n)

    for (let i = 0; i < n; i++) {
        finalArray[i] = i * 5
        console.log(finalArray[i])
    }
}

// 02. Lexicographically comparison

function solve(args) {
    let first = args[0].split('')
    let second = args[1].split('')
    let minLength = Math.min(first.length, second.length)
    let isTrue = true
    let isFalse = true

    if (isTrue) {
        for (let i = 0; i < minLength; i++) {
            if (first[i] < second[i]) {
                console.log('<')
                isFalse = false
                break
            } else if (first[i] > second[i]) {
                console.log('>')
                isFalse = false
                break
            }
        }
    }
    if (isFalse) {
        if (first.length > second.length) {
            console.log('>')
        } else if (first.length < second.length) {
            console.log('<')
        }
    }
    if (first.length == second.length) {
        for (let i = 0; i < minLength; i++) {
            if (first[i] != second[i]) {
                isTrue = false
            }
        }
        if (isTrue) {
            console.log('=')
        }
    }
}

// 01.Planar coordinates
function solve(args) {
    let sequence = 1
    let bestSequence = 0

    for (let i = 1; i < args.length; i++) {
        if (args[i] == args[i - 1]) {
            sequence++;
            if (sequence > bestSequence) {
                bestSequence = sequence
            }
        } else {
            sequence = 1
        }
    }
    console.log(bestSequence)
}

// 04. Maximal increasing sequence
function solve(args) {
    let arr = args.map(Number);
    let increasing = 1;
    let bestIncresing = 1;

    for (let i = 1; i < arr.length; i++) {
        if (arr[i - 1] < arr[i]) {
            increasing++;
            if (increasing > bestIncresing) {
                bestIncresing = increasing;
            }
        } else {
            increasing = 1;
        }
    }

    console.log(bestIncresing);
}
solve(['13', '4', '1', '1', '4', '2', '3', '4', '4', '1', '2', '4', '9', '3'])
    //Frequent number
function solve(args) {
    let arr = args.map(Number);
    let counter = 0;
    let bestCounter = 0;
    let finalFreq = 0;

    for (let i = 1; i < arr.length; i += 1) {
        for (let j = 2; j < arr.length; j += 1) {
            if (arr[i] === arr[j]) {
                counter += 1;
                if (counter > bestCounter) {
                    bestCounter = counter;
                    finalFreq = arr[i];
                }
            }
        }
        counter = 1;
    }
    console.log(`${finalFreq} (${bestCounter} times)`);
}