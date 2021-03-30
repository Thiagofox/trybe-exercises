
let numbers = [2, 3, 6, 7, 10, 1];

function higherValue(array){
  
  let position = 0;
  
  for (let index =0 ; index < array.length; index += 1){
    
    if (array[index] > array[index + 1]){
      higherNumber = array[index];
      position = index;
    }
  }
  return position;
};

console.log(higherValue(numbers));
