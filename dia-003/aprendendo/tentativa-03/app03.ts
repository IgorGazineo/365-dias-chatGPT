import * as readlineSync from "readline-sync";

const frase: string = readlineSync.question("Digite uma frase: ");
const quantidade: number = readlineSync.questionInt(
  "Digite o numero de vezes que essa frase deve ser repetida: "
);

for (let i: number = 1; i <= quantidade; i++) {
  console.log(frase);
}
