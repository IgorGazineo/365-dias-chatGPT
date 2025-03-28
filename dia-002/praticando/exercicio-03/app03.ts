import * as readlineSync from "readline-sync";

const altura: number = readlineSync.questionFloat("Digite sua altura: ");
const peso: number = readlineSync.questionFloat("Digite seu peso: ");
const IMC: number = peso / altura ** 2;
let classificacao = "";
if (IMC < 18.5) {
  classificacao = "Abaixo do peso";
} else if (IMC >= 18.5 && IMC <= 24.9) {
  classificacao = "Peso normal";
} else if (IMC >= 25 && IMC <= 29.9) {
  classificacao = "Sobrepeso";
} else if (IMC >= 30 && IMC <= 34.9) {
  classificacao = "Obesidade Grau 1";
} else if (IMC >= 35 && IMC <= 39.9) {
  classificacao = "Obesidade Grau 2";
} else if (IMC > 40) {
  classificacao = "Obesidade Grau 3";
}

console.log(`Seu IMC é ${IMC}. Classificação: ${classificacao}.`);
