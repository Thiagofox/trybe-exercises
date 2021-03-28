let numbers = [70, 100];
let sum = 0;
for (let index = 0; index < numbers.length; index += 1){
  sum += numbers[index] 

}
let average = sum  / numbers.length;
console.log(average);

if (average > 20){
  console.log('valor maior que 20');
}
else {
  console.log('valor menor ou igual a 20')
}

