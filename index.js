const prompt  = require('prompt-sync')();

var nome = prompt("Digite seu nome: ");
var salario_bruto = parseFloat(prompt("Digite seu salário bruto: "));
var imposto_renda = salario_bruto * 0.10;
var salario_liquido = salario_bruto - imposto_renda;
console.log("Salário Líquido: R$", salario_liquido);
