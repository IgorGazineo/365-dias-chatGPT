"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readlineSync = require("readline-sync");
var altura = readlineSync.questionFloat("Digite sua altura: ");
var peso = readlineSync.questionFloat("Digite seu peso: ");
var IMC = peso / Math.pow(altura, 2);
var classificacao = "";
if (IMC < 18.5) {
    classificacao = "Abaixo do peso";
}
else if (IMC >= 18.5 && IMC <= 24.9) {
    classificacao = "Peso normal";
}
else if (IMC >= 25 && IMC <= 29.9) {
    classificacao = "Sobrepeso";
}
else if (IMC >= 30 && IMC <= 34.9) {
    classificacao = "Obesidade Grau 1";
}
else if (IMC >= 35 && IMC <= 39.9) {
    classificacao = "Obesidade Grau 2";
}
else if (IMC > 40) {
    classificacao = "Obesidade Grau 3";
}
console.log("Seu IMC \u00E9 ".concat(IMC, ". Classifica\u00E7\u00E3o: ").concat(classificacao, "."));
