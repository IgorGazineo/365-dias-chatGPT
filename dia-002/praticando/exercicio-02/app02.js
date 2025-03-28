"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readlineSync = require("readline-sync");
var numero = readlineSync.questionInt("Digite um numero: ");
if (numero > 0) {
    console.log("Número positivo");
}
else if (numero < 0) {
    console.log("Número negativo");
}
else {
    console.log("O número é zero");
}
