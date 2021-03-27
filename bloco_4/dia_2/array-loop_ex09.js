let array = [];

for(let index = 1; index < 26; index+= 1){
  array.push(index);
}
let result = 0;
for (let indexS = 0; indexS < array.length; indexS += 1){
  result = array[indexS] / 2;
  console.log(result);
}
