const nomes: string[] = ["Ana", "Carlos", "Beatriz", "Eduardo", "Fernanda"];

let nomeEncontrado: boolean = false;

for (const nome of nomes) {
  if (nome === "Eduardo") {
    nomeEncontrado = true;
  }
}

if (nomeEncontrado) {
  console.log("Nome encontrado!");
} else {
  console.log("Nome não encontrado!");
}
