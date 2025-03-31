var numeros = [1, 2, 3, 4, 5, 6, 7, 8];
var numerosPares = [];
if (!numeros.length) {
    console.log("O array está vazio.");
}
else {
    for (var i = 0; i < numeros.length; i++) {
        if (numeros[i] % 2 === 0) {
            numerosPares.push(numeros[i]);
        }
    }
    if (!numerosPares.length) {
        console.log("Não há números pares no array.");
    }
    else {
        console.log("Os n\u00FAmeros pares s\u00E3o: ".concat(numerosPares.join(", "), "."));
    }
}
