"use strict";

//01. Exchange if greater
function solve(args) {
    var a = args[0],
        b = args[1],
        c = 0;

    if (a > b) {
        c = a;
        a = b;
        b = c;
        console.log(a + " " + b);
    } else {
        console.log(a + " " + b);
    }
}

//02. Multiplication Sign
function solve(args) {

    var a = args[0],
        b = args[1],
        c = args[2];

    if (a != 0 && b != 0 && c != 0) {
        if (a < 0 && b > 0 && c > 0) {
            console.log("-");
        } else if (a > 0 && b < 0 && c > 0) {
            console.log("-");
        } else if (a > 0 && b > 0 && c < 0) {
            console.log("-");
        } else if (a < 0 && b < 0 && c < 0) {
            console.log("-");
        } else {
            console.log("+");
        }
    } else {
        console.log(0);
    }
}

//The biggest of three numbers
function solve(args) {
    var a = parseFloat(args[0]),
        b = parseFloat(args[1]),
        c = parseFloat(args[2]);

    if (a > b && a > c) {
        console.log(a);
    } else if (b > a && b > c) {
        console.log(b);
    } else {
        console.log(c);
    }
}

//04. Sort 3 numbers
function solve(args) {

    var a = parseFloat(args[0]),
        b = parseFloat(args[1]),
        c = parseFloat(args[2]);

    if (a > b && a > c) {
        if (b > c) {
            console.log(a + " " + b + " " + c);
        } else {
            console.log(a + " " + c + " " + b);
        }
    } else if (b > a && b > c) {
        if (a > c) {
            console.log(b + " " + a + " " + c);
        } else {
            console.log(b + " " + c + " " + a);
        }
    } else {
        if (b < a) {
            console.log(c + " " + a + " " + b);
        } else {
            console.log(c + " " + b + " " + a);
        }
    }
}

//05. Digit as word
function solve(args) {
    var n = parseFloat(args);

    switch (n) {
        case 0:
            console.log("zero");
            break;
        case 1:
            console.log("one");
            break;
        case 2:
            console.log("two");
            break;
        case 3:
            console.log("three");
            break;
        case 4:
            console.log("four");
            break;
        case 5:
            console.log("five");
            break;
        case 6:
            console.log("six");
            break;
        case 7:
            console.log("seven");
            break;
        case 8:
            console.log("eight");
            break;
        case 9:
            console.log("nine");
            break;
        default:
            console.log("not a digit");
            break;
    }
}

//06. Quadratic equation
function solve(args) {


}

//07. The biggest of five numbers
function solve(args) {
    var max = parseFloat(args[0]);

    for (var i = 1; i < args.length; i++) {
        if (max < parseFloat(args[i])) {
            max = parseFloat(args[i]);
        }
    }
    console.log(max);
}

//////////////////////////////////solve(['10 10', '0 1 2 3 4 5 6 7 8 9']);

function solve(params) {
    var nk = params[0].split(' ').map(Number),
        s = params[1].split(' ').map(Number),
        finalArray = [],
        result = 0;
    for (var j = 0; j < nk[1]; j++) {
        var array = [];
        for (var i = 0; i < nk[0]; i++) {

            if (s[i] % 2 === 0 && s[i] != 0) {
                if (i === 0) {
                    array[0] = Math.max(s[nk[0] - 1], s[1]);
                } else if (i === nk[0] - 1) {
                    array[i] = Math.max(s[nk[0] - 2], s[0]);
                } else {
                    array[i] = Math.max(s[i - 1], s[i + 1]);
                }
            } else if (s[i] % 2 != 0 && s[i] != 1) {
                if (i === 0) {
                    array[0] = Math.min(s[nk[0] - 1], s[1]);
                } else if (i === nk[0] - 1) {
                    array[i] = Math.min(s[nk[0] - 2], s[0]);
                } else {
                    array[i] = Math.min(s[i - 1], s[i + 1]);
                }
            } else if (s[i] === 1) {
                if (i === 0) {
                    array[0] = s[nk[0] - 1] + s[1];
                } else if (i === nk[0] - 1) {
                    array[i] = s[nk[0] - 2] + s[0];
                } else {
                    array[i] = s[i - 1] + s[i + 1];
                }
            } else if (s[i] === 0) {
                if (i === 0) {
                    array[0] = Math.abs(s[nk[0] - 1] - s[1]);
                } else if (i === nk[0] - 1) {
                    array[i] = Math.abs(s[nk[0] - 2] - s[0]);
                } else {
                    array[i] = Math.abs(s[i - 1] - s[i + 1]);
                }
            }
        }
        finalArray = array;
        s = array;
    }
    for (var k = 0; k < finalArray.length; k++) {
        result = result + finalArray[k];
    }
    console.log(result);
}

//////////////////////////////////////
solve(
    ['3',
        '4',
        '--R-',
        'B--B',
        'Q--Q',
        '12',
        'd1 b3',
        'a1 a3',
        'c3 b2',
        'a1 c1',
        'a1 b2',
        'a1 c3',
        'a2 b3',
        'd2 c1',
        'b1 b2',
        'c3 b1',
        'a2 a3',
        'd1 d3'
    ]
);

function solve(params) {
    var rows = +params[0],
        cols = +params[1],
        board = params.slice(2, rows + 2),
        i,
        numberOfMoves = params[rows + 2],
        moves = params.slice(rows + 2 + 1, rows + 11 + 2 + 1 + 1);

    for (i = 0; i < tests; i++) {
        move = params[rows + 3 + i];
    }
}