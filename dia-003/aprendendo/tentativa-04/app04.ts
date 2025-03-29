import * as readlineSync from "readline-sync";

const numero: number = readlineSync.questionInt("Digite um numero: ");
let soma: number = 0;
for (let i: number = 1; i <= numero; i++) {
  soma = soma + i;
}

console.log(`A soma de todos os números de 1 até ${numero} é ${soma}.`);
