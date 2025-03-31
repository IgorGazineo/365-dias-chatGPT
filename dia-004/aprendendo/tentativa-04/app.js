var nomes = ["Ana", "Carlos", "Beatriz", "Eduardo", "Fernanda"];
var nomeEncontrado = false;
for (var _i = 0, nomes_1 = nomes; _i < nomes_1.length; _i++) {
    var nome = nomes_1[_i];
    if (nome === "Maria") {
        nomeEncontrado = true;
    }
}
if (nomeEncontrado) {
    console.log("Nome encontrado!");
}
else {
    console.log("Nome não encontrado!");
}
