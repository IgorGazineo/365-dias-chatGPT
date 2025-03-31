const numeros: number[] = [12, 24, 36, 48, 60];
let total: number = 0;
let media: number = 0;
if (numeros.length === 0) {
  console.log("O array está vazio, não é possível calcular a média.");
} else {
  for (let i: number = 0; i < numeros.length; i++) {
    total += numeros[i];
  }
  media = total / numeros.length;
}

console.log(`A média dos números é ${media}.`);
