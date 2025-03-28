import * as readlineSync from "readline-sync";

const numero: number = readlineSync.questionInt("Digite um numero: ");

if (numero > 0) {
  console.log("Número positivo");
} else if (numero < 0) {
  console.log("Número negativo");
} else {
  console.log("O número é zero");
}
