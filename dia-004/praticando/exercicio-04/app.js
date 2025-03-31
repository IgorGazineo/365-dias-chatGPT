"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readlineSync = require("readline-sync");
var numeros = [2, 3, 5, 2, 8, 2, 9, 10];
var numeroAlvo = readlineSync.questionInt("Digite um numero: ");
var quantidadeNumero = 0;
if (!numeros.length) {
    console.log("O array está vazio.");
}
else {
    for (var i = 0; i < numeros.length; i++) {
        if (numeros[i] === numeroAlvo) {
            quantidadeNumero++;
        }
    }
    if (!quantidadeNumero) {
        console.log("O número não foi encontrado no array.");
    }
    else {
        console.log("O n\u00FAmero ".concat(numeroAlvo, " apareceu ").concat(quantidadeNumero, " vez(es) no array."));
    }
}
