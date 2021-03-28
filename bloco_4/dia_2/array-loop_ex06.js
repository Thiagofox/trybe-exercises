let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let result = 0;
let count = 0;

for (let index = 0; index < numbers.length; index += 1){
  
  result = numbers[index];
  
  if (result % 2 !== 0){
    count += 1;
  }
  
}
console.log('Existem',count, 'numeros impares');