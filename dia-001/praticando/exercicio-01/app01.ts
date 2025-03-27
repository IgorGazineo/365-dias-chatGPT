import * as readlineSync from "readline-sync";

const number1: number = readlineSync.questionFloat(
  "Digite o primeiro numero: "
);
const number2: number = readlineSync.questionFloat("Digite o segundo numero: ");

console.log(`A soma de ${number1} e ${number2} é ${number1 + number2}.`);
