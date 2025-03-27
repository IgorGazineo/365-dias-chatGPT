import * as readlineSync from "readline-sync";

const celsius: number = readlineSync.questionFloat(
  "Digite a temperatura em celsius: "
);

const celsiusToFahrenheit = (celsius * 9) / 5 + 32;

console.log(
  `A temperatura de ${celsius}°C é equivalente a ${celsiusToFahrenheit}°F.`
);
