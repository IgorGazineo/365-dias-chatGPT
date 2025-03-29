"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readlineSync = require("readline-sync");
var numero = readlineSync.questionInt("Digite um numero: ");
var primeiro = 0;
var segundo = 1;
var terceiro = primeiro + segundo;
if (numero === 1) {
    console.log(primeiro);
}
else if (numero === 2) {
    console.log(primeiro);
    console.log(segundo);
}
else if (numero > 2) {
    console.log(primeiro);
    console.log(segundo);
    for (var i = 1; i < numero - 1; i++) {
        terceiro = primeiro + segundo;
        console.log(terceiro);
        primeiro = segundo;
        segundo = terceiro;
    }
}
// 0, 1, 1, 2, 3, 5, 8, 13, 21, ...
