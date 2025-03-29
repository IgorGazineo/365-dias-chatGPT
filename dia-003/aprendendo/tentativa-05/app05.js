"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readlineSync = require("readline-sync");
var numero = readlineSync.questionInt("Digite um numero: ");
for (var i = 0; i <= numero; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}
