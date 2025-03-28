import * as readlineSync from "readline-sync";

for (let i = 0; i < 3; i++) {
  const idade: number = readlineSync.questionInt("Digite sua idade: ");
  if (idade < 12) {
    console.log("Você é uma criança.");
  } else if (idade >= 18) {
    console.log("Você é um adulto.");
  } else {
    console.log("Você é um adolecente.");
  }
}
