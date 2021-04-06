let salarioBruto = 6000;

if (salarioBruto <= 1556.94){
  salarioINSS = salarioBruto * 0.92;
}
else if (salarioBruto > 1556.95 && salarioBruto <= 2594.92){
  salarioINSS = salarioBruto * 0.91;
}
else if (salarioBruto > 2594.93 && salarioBruto <= 5189.82){
  salarioINSS = salarioBruto * 0.89;
}
else {
  salarioINSS = salarioBruto - 570.88;
}

 console.log('O salario com o valor cauculado do INSS é de' , salarioINSS);

 let salarioLiquido = 0;

if (salarioINSS < 1903.98){
  salarioLiquido = salarioINSS;
  
}

else if(salarioINSS >= 1903.99 && salarioINSS <= 2826.65){
  aliquotaIR = (salarioINSS * 0.075) - 142.80;
  salarioLiquido = salarioINSS - aliquotaIR;
}

else if (salarioINSS >= 2826.66 && salarioINSS <= 3751.05){
  aliquotaIR = (salarioINSS * 0.15) - 354.80;
  salarioLiquido = salarioINSS - aliquotaIR;
}

else if (salarioINSS >= 3751.06 && salarioINSS <= 4664.68){
  aliquotaIR = (salarioINSS * 0.225) - 636.13;
  salarioLiquido = salarioINSS - aliquotaIR;
}

else if (salarioINSS > 4664.69){
  aliquotaIR = (salarioINSS * 0.275) - 869.36;
  salarioLiquido = salarioINSS - aliquotaIR;
}

console.log('O salário liquido é de:' , salarioLiquido);
