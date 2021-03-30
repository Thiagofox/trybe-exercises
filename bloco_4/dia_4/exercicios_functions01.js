function palindrome (info){
  let array = info.split('');
  let n = array.length
  let bool = true;
  
  for (let index = 0; index < n; index += 1){
    if (array[index] !== array[(n - 1) - index]){
      bool = false;
    }
  }
  return bool;
}

let word = 'thiago';

console.log(palindrome(word));
