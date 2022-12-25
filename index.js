const prompt = require('prompt-sync')();

for (var i = 1; i <= 5; i++) {
  console.log("Pessoa ", i);

  var nome = prompt("Digite seu nome: ");
  var salario_bruto = parseFloat(prompt("Digite seu salário bruto: "));
  var dependente = parseInt(prompt("Digite o número de dependentes: "));

  for (var d = 1; d <= dependente; d++) {
    var ganho_dependente = parseFloat(prompt("Digite seu ganho mensal: "));
    salario_bruto = salario_bruto + ganho_dependente;
  }

  var renda_percapta = salario_bruto / (dependente + 1);

  if (renda_percapta >= 500) {

    if (salario_bruto > 0 && salario_bruto <= 1903.98) {
      var imposto_renda = salario_bruto * 0.05;
    } else if (salario_bruto <= 2826.65) {
      var imposto_renda = salario_bruto * 0.075;
    } else {
      var imposto_renda = salario_bruto * 0.15;
    }

  } else {
    var imposto_renda = 0;
  }

  var salario_liquido = salario_bruto - imposto_renda;
  console.log("Salário Líquido: R$", salario_liquido, "\n");

}