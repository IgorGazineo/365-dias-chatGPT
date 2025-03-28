"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readlineSync = require("readline-sync");
for (var i = 0; i < 3; i++) {
    var idade = readlineSync.questionInt("Digite sua idade: ");
    if (idade < 12) {
        console.log("Você é uma criança.");
    }
    else if (idade >= 18) {
        console.log("Você é um adulto.");
    }
    else {
        console.log("Você é um adolecente.");
    }
}
