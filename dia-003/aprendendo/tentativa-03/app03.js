"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readlineSync = require("readline-sync");
var frase = readlineSync.question("Digite uma frase: ");
var quantidade = readlineSync.questionInt("Digite o numero de vezes que essa frase deve ser repetida: ");
for (var i = 1; i <= quantidade; i++) {
    console.log(frase + i);
}
