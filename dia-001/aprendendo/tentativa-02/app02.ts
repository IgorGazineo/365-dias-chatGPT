import * as readlineSync from "readline-sync";

const name: string = readlineSync.question("Digite seu nome: ");
const city: string = readlineSync.question("Digite sua cidade: ");
const age: string = readlineSync.question("Digite sua idade: ");

console.log(`Olá ${name}. Você tem ${age} anos e fala de ${city}.`);
