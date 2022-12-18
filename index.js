const prompt = require('prompt-sync')();

var nome = prompt("Digite seu nome: ");
var salario_bruto = parseFloat(prompt("Digite seu salário bruto: "));

if (salario_bruto > 0 && salario_bruto <= 1903.98) {
  var imposto_renda = salario_bruto * 0.05;
} else if (salario_bruto <= 2826.65) {
  var imposto_renda = salario_bruto * 0.075;
} else {
  var imposto_renda = salario_bruto * 0.15;
}

var salario_liquido = salario_bruto - imposto_renda;
console.log("Salário Líquido: R$", salario_liquido);
