"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readlineSync = require("readline-sync");
for (var i = 0; i < 5; i++) {
    var idade = readlineSync.questionInt("Digite sua idade: ");
    var nome = readlineSync.question("Digite seu nome: ");
    if (idade < 12) {
        console.log("Ol\u00E1 ".concat(nome, ". Voc\u00EA \u00E9 uma crian\u00E7a de ").concat(idade === 1 ? "".concat(idade, " ano.") : "".concat(idade, " anos.")));
    }
    else if (idade >= 18) {
        console.log("Ol\u00E1 ".concat(nome, ". Voc\u00EA \u00E9 um adulto de ").concat(idade, " anos."));
    }
    else {
        console.log("Ol\u00E1 ".concat(nome, ". Voc\u00EA \u00E9 um adolecente de ").concat(idade, " anos."));
    }
}
