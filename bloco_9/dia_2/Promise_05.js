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
    .then((result) => [2, 3, 5, 10].map((num) => result / num))
    .then((result) => console.log(result))
    .then((array) => array.reduce((acc, curr) => acc + curr), 0)
    .then((array) => console.log(array))    
    .catch((result) => console.log(`Promise rejeitada ${result}`));
};

fetchPromise();


const fetchPromise = () => {
  const myPromise = new Promise((resolve, reject) => {
    const myArray = Array.from(
      { length: 10 },
      () =>  Math.floor(Math.random() * 50) + 1
    );
    const sum = myArray.map(number => number * number)
                       .reduce((number, acc) => number + acc, 0);

    (sum < 8000) ? resolve(sum) : reject();
  });

  myPromise
    .then(sum => [2, 3, 5, 10].map(number => sum / number))
    .then((sum) => console.log(sum))
    .then((sum) => sum.reduce((number, acc) => number + acc, 0))
    .then((sum) => console.log(sum))
    .catch(() => console.log('É mais de oito mil! Essa promise deve estar quebrada!')
    );
};

fetchPromise();