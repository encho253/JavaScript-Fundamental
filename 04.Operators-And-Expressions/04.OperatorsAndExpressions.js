'use strict';

//01.Odd or Even
function solve(args) {
    if (args % 2 == 0) {
        console.log("even " + args)
    } else {
        console.log("odd " + args);
    }
}

//02.Devide by 7 and 5
function solve(args) {
    if (args % 5 == 0 && args % 7 == 0) {
        console.log("true " + args);
    } else {
        console.log("false " + args);
    }
}

//03.Rectangles
function solve(args) {
    console.log((args[0] * args[1]).toFixed(2) + " " + ((args[0] * 2) + (args[1] * 2)).toFixed(2))
}

//04.Third Digit
function solve(args) {
    args /= 100;
    args %= 10;

    if (parseInt(args) == 7) {
        return true;
    } else {
        console.log(false + " " + parseInt(args));
    }
}

//05. Third Bit
function solve(args) {
    var mask = 1 << 3;
    var result = args & mask;
    result = result >> 3;

    return result;
}

//06. Point in a Circle
function solve(args) {

    var x = args[0];
    var y = args[1];
    var radius = 2;

    var inCircle = (x - 0) * (x - 0) + (y - 0) * (y - 0) <= radius * radius;
    var distance = Math.sqrt((x - 0) * (x - 0) + (y - 0) * (y - 0));

    if (inCircle == true) {
        console.log("yes " + distance.toFixed(2));
    } else
        console.log("no " + distance.toFixed(2));
}

//07.Prime Check
function solve(args) {

    var digit = args;
    var isPrime = true;
    if (digit <= 100) {
        for (var i = 2; i <= Math.sqrt(digit); i++) {
            if (digit % i == 0) {
                isPrime = false;
                break;
            }
        }
        if (digit == 1 || digit < 1) {
            isPrime = false;
        }
        console.log(isPrime);
    }
}

//08.Trapezoid
function solve(args) {
    var a = parseFloat(args[0]);
    var b = parseFloat(args[1]);
    var h = parseFloat(args[2]);

    var area = ((a + b) / 2) * h;
    console.log(area.toFixed(7));
}

//09. Point, Circle, Rectangle
function solve(args) {
    var x = parseFloat(args[0]),
        y = parseFloat(args[1]);

    var inCircle = (x - 1) * (x - 1) + (y - 1) * (y - 1) <= 1.5 * 1.5;
    var insideRectangle = (x >= -1) && (x <= (-1 + 6)) && (y <= 1) && (y >= (1 - 6));

    if (inCircle == true && insideRectangle == true) {
        console.log("inside circle inside rectangle");
    } else if (inCircle == false && insideRectangle == false) {
        console.log("outside circle outside rectangle");
    } else if (inCircle == true && insideRectangle == false) {
        console.log("inside circle outside rectangle");
    } else {
        console.log("outside circle inside rectangle");
    }
}