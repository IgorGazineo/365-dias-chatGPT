import * as readlineSync from "readline-sync";

const numeros: number[] = [2, 3, 5, 2, 8, 2, 9, 10];
const numeroAlvo: number = readlineSync.questionInt("Digite um numero: ");
let quantidadeNumero = 0;

if (!numeros.length) {
  console.log("O array está vazio.");
} else {
  for (let i: number = 0; i < numeros.length; i++) {
    if (numeros[i] === numeroAlvo) {
      quantidadeNumero++;
    }
  }

  if (!quantidadeNumero) {
    console.log("O número não foi encontrado no array.");
  } else {
    console.log(
      `O número ${numeroAlvo} apareceu ${quantidadeNumero} vez(es) no array.`
    );
  }
}
