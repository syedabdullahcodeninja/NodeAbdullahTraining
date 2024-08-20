"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const port = 3000;
function add(a, b, callback) {
    setTimeout(() => {
        const result = a + b;
        console.log(`Addition: ${a} + ${b} = ${result}`);
        callback(result);
    }, 1000);
}
function multiply(a, b, callback) {
    setTimeout(() => {
        const result = a * b;
        console.log(`Multiplication: ${a} * ${b} = ${result}`);
        callback(result);
    }, 1000);
}
function subtract(a, b, callback) {
    setTimeout(() => {
        const result = a - b;
        console.log(`Subtraction: ${a} - ${b} = ${result}`);
        callback(result);
    }, 1000);
}
function divide(a, b, callback) {
    setTimeout(() => {
        if (b === 0) {
            callback('Error: Division by zero');
        }
        else {
            const result = a / b;
            console.log(`Division: ${a} / ${b} = ${result}`);
            callback(result);
        }
    }, 1000);
}
app.get('/', (req, res) => {
    const value1 = 5;
    const value2 = 10;
    add(value1, value2, (resultAfterAddition) => {
        subtract(resultAfterAddition, value2, (resultAfterSubtraction) => {
            multiply(resultAfterSubtraction, value2, (resultAfterMultiplication) => {
                divide(resultAfterMultiplication, value2, (finalResult) => {
                    res.send(`Initial Values: ${value1} and ${value2} <br> 
                    Addition Result: ${resultAfterAddition} <br> 
                    Subtraction Result: ${resultAfterSubtraction} <br> 
                    Multiplication Result: ${resultAfterMultiplication} <br> 
                    Final Division Result: ${finalResult}`);
                });
            });
        });
    });
});
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
