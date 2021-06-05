import React from 'react';
import Pokemon from './Pokemon';
import Button from './Button';
import './pokedex.css';

class Pokedex extends React.Component {
  constructor(props) {
    super(props);
    // Aqui setamos dentro do construtor os statesde do componente pokedex
    // temos o pokemonIndex que devine o estado inicial como 0
    // e o pokemonsType que server para setar o filtro dos pokemons estado inicial no construtor 'All'
    
    this.state = {
      pokemonIndex: 0,
      pokemonsType: 'All'
    }
    
    // Binds => O bind server para 'bindar' as funções para que consigamos usar o this dentro da classe
    // todas as classe que forem usasadas dentro desse componente devem ser bindadas
    
    this.getNextPKM = this.getNextPKM.bind(this)
    this.setFilter = this.setFilter.bind(this)
    this.getPKMTypes = this.getPKMTypes.bind(this)
    this.applyFilter = this.applyFilter.bind(this)
    this.createAllBtn= this.createAllBtn.bind(this)
  }

  // Essa função tem como objetivo ao clicar no botão trazer o proximo pokemon da lista -> recebe como parametro a lista de pokemons ->  colocamos essa lista em uma variavel pokeSize -> setamos o state de pokemonIndex para que a cara click no botao ele acrescente + 1 -> e para que esse botao percorra  essa lista como um carrocel(voltando ao primeiro pokemons da lista usamos o % numero de elementeos na lista exemplo 1 / 10 resto 1 -> 2 / 10 resto 2 ... 10 / 10 resto 0 volta o inicio Genial )

  getNextPKM(list) {
    const pokeSize = list;
    this.setState((state) => ({
      pokemonIndex: (state.pokemonIndex + 1) % pokeSize.length 
    }));
  }
  // Essa função visa setar o filtro para que ao clicar no botão contendo o tipo do pokemon ela seta o state ja definido com o nome da classe onde renderizamos o botão que recebe o tipo do pokemons -> ela tambem seta o state do do index como 0 para que peguemos o 1 pokemon da lista aposa clicarmos no filtro

  setFilter (event) {
    this.setState ({
      pokemonsType: event.target.className,
      pokemonIndex: 0,
    })
  }
  
  // recebemos a lista de pokemons via props de App.js colocamos ela em uma variavel pokeArray usamos o new set + um map para percorrer essa lista e criar um novo array com somente os tipos -> o map percorre essa lista e o new Set garante que os pokemos com o mesmo tipo nao sejam adicionados mais de uma vez nesse array

  getPKMTypes () {
    const pokeArray = this.props.pokemons;
    return [...new Set(pokeArray.map((type) => type.type))];
  }

  // colocamos o resultado da função getPKMTypes (que é um array contendo os tipos dos pokemos sem repeti-los) dentro de uma variavel result
  // fazemos um map e para cada tipo de pokemons que temos no array renderizamos um botão e pasamos tambem a função setFilter que altera o estado do filtro como props para o componte Button 

  applyFilter () {
    const result = this.getPKMTypes();
    console.log(this.state)
    return result.map((type) => <Button buttons={type} key={type} setFilter={this.setFilter}/>) 
  }

  // a função createAllBtn tem como objetivo criar o botão All que cria o botao e seta o pokemonsType para all pelo class name usando a função set filter 

  createAllBtn () {
    return (<button className="All" onClick={this.setFilter} >All</button>)
  }

  render() {
  
    // este filter é o negocio -> recebe como props o array de pokemos -> faz um filter (o filter ele ele tem uma condição e ele so adiona no array caso essa condição seja verdadeira) nesse casso se o pokemonsType for = a All ou os pokemons tenham o tipo que esta setado em pokemonsType e gera um array com todos esses pokemons

    const list = this.props.pokemons.filter((poke) => {
      return this.state.pokemonsType === 'All' || poke.type === this.state.pokemonsType
    });

    // aqui renderizamos e passamos algumas props para os outros componentes -> passamos como props para Pokemon a lista filtrada com os pokemons setados pelo botao this.setFilter
    // com a função this.createAllBtn crio o botão all descrito acima
    // uma tag button onde ao clicar busco o proximo pokemos -> ele possui uma logica que caso essa lista tenha o tamanho menor ou igual a 1 ele desativa o botao para que não seja possivel o click
    // por fim chamo a função applyfilter que passa como props para o compenente button uma array com todos os tipos unicos dos pokemosn + a função set filter
    
    return (
      <div className="pokedex">
        {/* aqui usamos o resultado do filter acima -> list com o valor do estado */}
        <Pokemon pokemon = {list[this.state.pokemonIndex]} /> 
        {this.createAllBtn()}
        {/* crie um botão com a função de quando clicado ele chama a função getNextPKM enviando como paramentro a lista de pokemons filtrados e aqui vai um if ternario para caso essa lista tiver o tamanho menos ou igual a 1 o botão ficaria desativado pois não haveria outro pokemon na lista para ser proximo */}
        <button 
          onClick={()=> this.getNextPKM(list)} 
          disabled={list.length <= 1 ? true : false} >
          Next Pokemon
        </button>
        {this.applyFilter()}
      </div>
    );
  }
}

export default Pokedex;