"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rlSync = require("readline-sync");
var nome = rlSync.question("Digite seu nome: ");
var idade = Number(rlSync.question("Digite sua idade: "));
var cidade = rlSync.question("Digite sua cidade: ");
console.log("Ol\u00E1 ".concat(nome, ". Voc\u00EA tem ").concat(idade, " anos e fala de ").concat(cidade, "."));
