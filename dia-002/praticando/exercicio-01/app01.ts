import * as readlineSync from "readline-sync";

const nota: number = readlineSync.questionFloat("Digite sua nota: ");

if (nota >= 7) {
  console.log("Aprovado");
} else if (nota < 5) {
  console.log("Reprovado");
} else {
  console.log("Recuperação");
}
