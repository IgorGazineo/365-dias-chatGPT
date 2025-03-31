const arrayNumeros: number[] = [3, 7, 1, 5, 9, 8, 4];
let somaDosPares: number = 0;
let somaDosImpares: number = 0;

for (let i: number = 0; i < arrayNumeros.length; i++) {
  if (arrayNumeros[i] % 2 === 0) {
    somaDosPares += arrayNumeros[i];
  } else {
    somaDosImpares += arrayNumeros[i];
  }
}

console.log(`A soma dos números ímpares: ${somaDosImpares}`);
console.log(`A soma dos números pares: ${somaDosPares}`);
