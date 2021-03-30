let array =['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];

function higherCharCount(names){
  let charNumbers = 0;
  let biggerChars = 0;
  let bigerName;

  for (let index = 0; index < names.length; index += 1){
    charNumbers = names[index].length;
    
    if(charNumbers > biggerChars){
      biggerChars = charNumbers;
      bigerName = names[index];
    }

  }
  return bigerName;
}

console.log(higherCharCount(array))