"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readline = require("readline");
var Calculator = /** @class */ (function () {
    function Calculator() {
    }
    Calculator.prototype.add = function (a, b) {
        return a + b;
    };
    Calculator.prototype.subtract = function (a, b) {
        return a - b;
    };
    Calculator.prototype.multiply = function (a, b) {
        return a * b;
    };
    Calculator.prototype.divide = function (a, b) {
        if (b === 0) {
            throw new Error('Cannot divide by zero');
        }
        return a / b;
    };
    return Calculator;
}());
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
var calculator = new Calculator();
rl.question('Enter the first number: ', function (num1Input) {
    var num1 = parseFloat(num1Input);
    rl.question('Enter the second number: ', function (num2Input) {
        var num2 = parseFloat(num2Input);
        console.log('--- Results ---');
        console.log('Addition:', calculator.add(num1, num2));
        console.log('Subtraction:', calculator.subtract(num1, num2));
        console.log('Multiplication:', calculator.multiply(num1, num2));
        try {
            console.log('Division:', calculator.divide(num1, num2));
        }
        catch (error) {
            console.error(error.message);
        }
        rl.close();
    });
});
