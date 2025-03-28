"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readlineSync = require("readline-sync");
var nome = readlineSync.question("Digite seu nome: ");
var idade = readlineSync.questionInt("Digite sua idade: ");
var faixaEtaria = "";
if (idade < 12) {
    faixaEtaria = "uma criança";
}
else if (idade >= 12 && idade < 18) {
    faixaEtaria = "um adolecente";
}
else if (idade >= 18 && idade < 60) {
    faixaEtaria = "um adulto";
}
else {
    faixaEtaria = "um idoso";
}
console.log("".concat(nome, ", voc\u00EA \u00E9 ").concat(faixaEtaria, "."));
// Crie um programa que pede para o usuário digitar sua idade e exibe:
// "Você é uma criança" se tiver menos de 12 anos.
// "Você é um adolescente" se tiver entre 12 e 17 anos.
// "Você é um adulto" se tiver entre 18 e 59 anos.
// "Você é um idoso" se tiver 60 anos ou mais.
// ⚡ Dica: Use if, else if, e else.
/*
🔹 Extra (opcional): Se quiser melhorar ainda mais o programa, peça também o nome do usuário e exiba a mensagem personalizada, como:
👉 "João, você é um adolescente."
*/
