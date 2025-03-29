"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readlineSync = require("readline-sync");
var numero = readlineSync.questionInt("Digite um numero inteiro positivo: ");
var fatorial = numero;
for (var i = numero - 1; i >= 1; i--) {
    fatorial *= i;
}
console.log("O fatorial de ".concat(numero, " \u00E9 ").concat(fatorial, "."));
