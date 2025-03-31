var arrayNumeros = [3, 7, 1, 5, 9, 8, 4];
var somaDosPares = 0;
var somaDosImpares = 0;
for (var i = 0; i < arrayNumeros.length; i++) {
    if (arrayNumeros[i] % 2 === 0) {
        somaDosPares += arrayNumeros[i];
    }
    else {
        somaDosImpares += arrayNumeros[i];
    }
}
console.log("A soma dos n\u00FAmeros \u00EDmpares: ".concat(somaDosImpares));
console.log("A soma dos n\u00FAmeros pares: ".concat(somaDosPares));
