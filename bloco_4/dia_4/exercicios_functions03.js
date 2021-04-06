let numbers = [2, 4, 6, 7, 10, 0, -3];

function lowerPosition(array){
  
  let position = 0;
  
  for (let index = 0; index < array.length; index += 1){
    
    if (array[index] < position){
      position = index;
    }
  }
  return position;
};

console.log(lowerPosition(numbers));
