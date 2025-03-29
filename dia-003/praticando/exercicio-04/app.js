"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readlineSync = require("readline-sync");
var numero = readlineSync.questionInt("Digite um numero inteiro: ");
for (var i = numero; i >= 0; i--) {
    console.log(i);
}
console.log("Fim da contagem!");
