import * as readlineSync from "readline-sync";

const numero: number = readlineSync.questionInt("Digite um numero interio: ");

for (let i: number = 1; i <= 10; i++) {
  console.log(`${numero} x ${i} = ${numero * i}`);
}
