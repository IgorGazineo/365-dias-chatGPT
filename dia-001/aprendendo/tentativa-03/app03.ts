import * as rlSync from "readline-sync";

const nome: string = rlSync.question("Digite seu nome: ");
const idade: number = Number(rlSync.question("Digite sua idade: "));
const cidade: string = rlSync.question("Digite sua cidade: ");

console.log(`Olá ${nome}. Você tem ${idade} anos e fala de ${cidade}.`);
