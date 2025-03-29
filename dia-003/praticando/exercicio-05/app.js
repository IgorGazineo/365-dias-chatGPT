"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readlineSync = require("readline-sync");
var numero = readlineSync.questionInt("Digite um numero inteiro: ");
for (var i = 1; i <= numero; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log(i);
    }
}
