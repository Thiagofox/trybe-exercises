import React,{ useState, useEffect } from "react";

function App() {
  const [pokemons, setPokemons] = useState([]);
  const [limit, setLimit] = useState(10)
  //didMount
  // useEffect(() => {} , [])

  // async function getPKM () {
  //   const url = 'https://pokeapi.co/api/v2/pokemon?limit=$151'
  //   const result = await fetch(url)
  //   console.log(result)
  // } 

  const handleMorePKM = () => {
    setLimit(limit + 10); 
    console.log(limit);
  }

  useEffect(() => {
    
    const getPKM = async () => {
      const url = `https://pokeapi.co/api/v2/pokemon?limit=${limit}`
      const { results } = await fetch(url)
        .then((data) => data.json())
      console.log(results);
      setPokemons(results)
    };

    getPKM();
     
  }, [limit]) // [] => sem nada dentro - componentDidMount
              // [limit] => com uma variavel de dentro de um useEfect() - componentDidUpdate

  // useEffect(() => {
  //   return () => {   //return => com o return - componentWillUnmount
  //     alert('unmount') 
  //   }
  // }, [])


  return (
    <div>
      <h1>TrybeGo</h1>
      <button type="button" onClick={handleMorePKM}>Buscar +10</button>
      <ul>
      {
        pokemons.map(({ name }) => <li key={name}>{name}</li>)
      }
      </ul>
    </div>
    
  );
}

export default App;
