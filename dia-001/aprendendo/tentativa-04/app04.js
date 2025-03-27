"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readlineSync = require("readline-sync");
var name = readlineSync.question("Digite seu nome: ");
var age = readlineSync.questionInt("Digite sua idade: ");
console.log("Ol\u00E1 ".concat(name, ". Voc\u00EA tem ").concat(age, " anos."));
