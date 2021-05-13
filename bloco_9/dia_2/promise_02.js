const fetchPromise = () => {
  const myPromise = new Promise((resolve, reject) => {
    const myArray = Array.from(
      { length: 10 },
      () =>  Math.floor(Math.random() * 50) + 1
    );
    const result = myArray.map(number => number * number)
                       .reduce((sum, number) => sum + number);

    (result < 8000) ? resolve(result) : reject(result);
  });
  
  myPromise
    .then((result) => console.log(`Promise resolvida ${result}`))
    .catch((result) => console.log(`Promise rejeitada ${result}`));
};

fetchPromise();

  
 

 

