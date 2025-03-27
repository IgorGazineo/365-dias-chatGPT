"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readlineSync = require("readline-sync");
var number1 = readlineSync.questionFloat("Digite o primeiro numero: ");
var number2 = readlineSync.questionFloat("Digite o segundo numero: ");
console.log("A soma de ".concat(number1, " e ").concat(number2, " \u00E9 ").concat(number1 + number2, "."));
