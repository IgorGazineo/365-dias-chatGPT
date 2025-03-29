import * as readlineSync from "readline-sync";

const numero: number = readlineSync.questionInt("Digite um numero: ");

for (let i: number = numero; i >= 0; i--) console.log(i);
