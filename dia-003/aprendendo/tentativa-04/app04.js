"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readlineSync = require("readline-sync");
var numero = readlineSync.questionInt("Digite um numero: ");
var soma = 0;
for (var i = 1; i <= numero; i++) {
    soma = soma + i;
}
console.log("A soma de todos os n\u00FAmeros de 1 at\u00E9 ".concat(numero, " \u00E9 ").concat(soma));
