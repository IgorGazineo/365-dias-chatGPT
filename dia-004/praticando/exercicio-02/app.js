var numeros = [5, 12, 23, 45, 7, 89, 34];
var maiorNumero = numeros[0];
if (!numeros.length) {
    console.log("O array está vazio, não é possível encontrar o maior número.");
}
else {
    for (var i = 0; i < numeros.length; i++) {
        if (numeros[i] > maiorNumero) {
            maiorNumero = numeros[i];
        }
    }
    console.log(maiorNumero);
}
