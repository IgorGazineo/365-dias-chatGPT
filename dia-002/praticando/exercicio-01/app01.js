"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readlineSync = require("readline-sync");
var nota = readlineSync.questionFloat("Digite sua note: ");
if (nota >= 7) {
    console.log("Aprovado");
}
else if (nota < 5) {
    console.log("Reprovado");
}
else {
    console.log("Recuperação");
}
