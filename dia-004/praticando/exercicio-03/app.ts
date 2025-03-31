const numeros: number[] = [1, 2, 3, 4, 5, 6, 7, 8];
const numerosPares: number[] = [];
if (!numeros.length) {
  console.log("O array está vazio.");
} else {
  for (let i: number = 0; i < numeros.length; i++) {
    if (numeros[i] % 2 === 0) {
      numerosPares.push(numeros[i]);
    }
  }

  if (!numerosPares.length) {
    console.log("Não há números pares no array.");
  } else {
    console.log(`Os números pares são: ${numerosPares.join(", ")}.`);
  }
}
