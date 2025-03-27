import * as readlineSync from "readline-sync";

const nome: string = readlineSync.question("Digite seu nome: ");
const cidade: string = readlineSync.question("Digite sua cidade: ");
const idade: number = readlineSync.question("Digite sua idade: ");

console.log(`Olá ${nome}. Você tem ${idade} anos e fala de ${cidade}.`);
