import * as readlineSync from "readline-sync";

const numero: number = readlineSync.questionInt("Digite um numero: ");

for (let i: number = 0; i <= numero; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}
