import * as readlineSync from "readline-sync";

const name: string = readlineSync.question("Digite seu nome: ");
const age: number = readlineSync.questionInt("Digite sua idade: ");

console.log(`Olá ${name}. Você tem ${age} anos.`);
