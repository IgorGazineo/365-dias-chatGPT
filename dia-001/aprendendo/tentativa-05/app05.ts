import * as readlineSync from "readline-sync";

const number1: number = readlineSync.questionInt("Digite o primeiro numero: ");
const number2: number = readlineSync.questionInt("Digite o segundo numero: ");
const sum = number1 + number2;
console.log(`O resultado da soma dos números ${number1} e ${number2} é ${sum}`);
