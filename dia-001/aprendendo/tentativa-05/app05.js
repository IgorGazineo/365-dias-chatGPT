"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readlineSync = require("readline-sync");
var number1 = readlineSync.questionInt("Digite o primeiro numero: ");
var number2 = readlineSync.questionInt("Digite o segundo numero: ");
var sum = number1 + number2;
console.log("O resultado da soma dos n\u00FAmeros ".concat(number1, " e ").concat(number2, " \u00E9 ").concat(sum));
