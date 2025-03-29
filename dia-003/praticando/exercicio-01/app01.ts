import * as readlineSync from "readline-sync";

const numero: number = readlineSync.questionInt(
  "Digite um numero inteiro positivo: "
);

let fatorial = numero;

for (let i = numero - 1; i >= 1; i--) {
  fatorial *= i;
}

console.log(`O fatorial de ${numero} é ${fatorial}.`);
