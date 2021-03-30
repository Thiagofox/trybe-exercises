let numbers = [2, 3, 2, 5, 8, 2, 3];

function repeatNumbers (array){
  
  let countRep = 0;
  let countNum = 0;
  let indexNumRep = 0;

  for (let index = 0; index < array.length; index += 1){
    let numberVer = array[index];

    for(let index2 = 0; index2 < array.length; index2 += 1){
      if (numberVer === array[index2]){
        
        countNum += 1;

      }
    }
    
    if(countNum > countRep){
      countRep = countNum;
      indexNumRep = array[index];
    }
    countNum = 0;
  }
  return(indexNumRep)
}

console.log(repeatNumbers(numbers));


