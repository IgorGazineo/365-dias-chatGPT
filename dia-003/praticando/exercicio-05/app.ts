import * as readlineSync from "readline-sync";

const numero: number = readlineSync.questionInt("Digite um numero inteiro: ");

for (let i = 1; i <= numero; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log(i);
  }
}
