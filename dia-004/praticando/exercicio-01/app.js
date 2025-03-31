var numeros = [12, 24, 36, 48, 60];
var total = 0;
var media = 0;
if (numeros.length === 0) {
    console.log("O array está vazio, não é possível calcular a média.");
}
else {
    for (var i = 0; i < numeros.length; i++) {
        total += numeros[i];
    }
    media = total / numeros.length;
}
console.log("A m\u00E9dia dos n\u00FAmeros \u00E9 ".concat(media, "."));
