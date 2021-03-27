let angleA = -110;
let angleB = 40;
let angleC = 40;

if (angleA <= 0 || angleC <= 0 || angleB <=0)
{
  console.log('Ângulo inválido')
}

else if (angleA + angleB + angleC > 180)
{
  console.log(false)
}
else 
{
  console.log(true)
}