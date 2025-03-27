"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readlineSync = require("readline-sync");
var celsius = readlineSync.questionFloat("Digite a temperatura em celsius: ");
var celsiusToFahrenheit = (celsius * 9) / 5 + 32;
console.log("A temperatura de ".concat(celsius, "\u00B0C \u00E9 equivalente a ").concat(celsiusToFahrenheit, "\u00B0F."));
