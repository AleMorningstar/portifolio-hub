function calcularIMC(peso, altura) {
    let imc = peso / (altura * altura);
    return imc.toFixed(2);
}

let meuPeso = 95;
let minhaAltura = 1.85;
let resultado = calcularIMC(meuPeso, minhaAltura);

console.log("Seu IMC é: " + resultado);