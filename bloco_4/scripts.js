// const name = "Thiago";
// const birthCity = "Rio";
// let birthYear = 2020;

// console.log(name);
// console.log(birthYear);
// console.log(birthCity)

// let patientId = '50';
// let isEnrolled = true;
// const patientInfo = {
//   firstName: 'Ana',
//   lastName: 'Santos',
// };
// const patientEmail = 'ana@email.com';

// console.log(typeof patientId);
// console.log(typeof patientAge);

// let base = 5;
// let altura = 8;
// area = base * altura;
// catetoo = (base ** 2) + (altura ** 2)
// cateto = Math.sqrt(catetoo)
// perimetro = base + altura + cateto
// console.log(perimetro)
// console.log(cateto);
// console.log(area);

// let nota = 70;

// if (nota >= 80)
// {
//   console.log("Parabéns, você foi aprovada(o)!");
// }
// else if (nota >= 60 && nota < 80 )
// {
//   console.log("Lista de Espera");
// }
// else {
//   console.log("reprovado");
// }
  
let status = "reprovada";

switch (status)
{
  case "aprovada":
    console.log("Parabéns, você foi aprovada(o)!");
    break;
  
  case "lista":
    console.log("Lista de Espera");
    break;
  
  case "reprovada":
    console.log("Reprovado");
    break;
}
