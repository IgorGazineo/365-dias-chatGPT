import * as readlineSync from "readline-sync";

const numero = readlineSync.questionInt("Digite um numero: ");
let primeiro = 0;
let segundo = 1;
let terceiro = primeiro + segundo;

if (numero === 1) {
  console.log(primeiro);
} else if (numero === 2) {
  console.log(primeiro);
  console.log(segundo);
} else if (numero > 2) {
  console.log(primeiro);
  console.log(segundo);
  for (let i = 1; i < numero - 1; i++) {
    terceiro = primeiro + segundo;
    console.log(terceiro);
    primeiro = segundo;
    segundo = terceiro;
  }
}
