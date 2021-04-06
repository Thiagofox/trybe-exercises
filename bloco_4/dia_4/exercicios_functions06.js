let number = 10;

function summation(num){
  let sum = 0;
  for (let index = 0; index <= num; index += 1){
    sum = sum + index;
  }
  return sum;
}

console.log(summation(number));

