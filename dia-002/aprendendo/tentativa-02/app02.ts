import * as readlineSync from "readline-sync";

for (let i: number = 0; i < 5; i++) {
  const idade: number = readlineSync.questionInt("Digite sua idade: ");
  const nome: string = readlineSync.question("Digite seu nome: ");

  if (idade < 12) {
    console.log(
      `Olá ${nome}. Você é uma criança de ${
        idade === 1 ? `${idade} ano.` : `${idade} anos.`
      }`
    );
  } else if (idade >= 18) {
    console.log(`Olá ${nome}. Você é um adulto de ${idade} anos.`);
  } else {
    console.log(`Olá ${nome}. Você é um adolecente de ${idade} anos.`);
  }
}
