"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readlineSync = require("readline-sync");
var numero = readlineSync.questionInt("Digite um numero interio: ");
for (var i = 1; i <= 10; i++) {
    console.log("".concat(numero, " x ").concat(i, " = ").concat(numero * i));
}
