"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readlineSync = require("readline-sync");
var numero = readlineSync.questionInt("Digite um numero: ");
for (var i = numero; i >= 0; i--)
    console.log(i);
