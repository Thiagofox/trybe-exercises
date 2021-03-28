let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let lowerNumber = 0;
let aux = numbers[0];

for (let index = 0; index < numbers.length; index += 1){
  
  if (numbers[index] <= aux){
    lowerNumber = numbers[index];
  }
    
  
}
console.log('o menor valor do array é:', lowerNumber);