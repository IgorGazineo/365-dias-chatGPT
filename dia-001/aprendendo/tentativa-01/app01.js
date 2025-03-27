"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readlineSync = require("readline-sync");
var nome = readlineSync.question("Digite seu nome: ");
var cidade = readlineSync.question("Digite sua cidade: ");
var idade = readlineSync.question("Digite sua idade: ");
console.log("Ol\u00E1 ".concat(nome, ". Voc\u00EA tem ").concat(idade, " anos e fala de ").concat(cidade, "."));
