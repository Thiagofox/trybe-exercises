let custoP = 1500;
let valorV = 2000;

if (custoP > 0 && valorV > 0){ 

  let imposto = custoP * 0.2;
  let custoI = custoP + imposto;
  let lucro = valorV - custoI;

  lucroT= lucro * 1000;
  console.log(lucroT);
}
else {
console.log ('Erro: Valor invalido');
}




