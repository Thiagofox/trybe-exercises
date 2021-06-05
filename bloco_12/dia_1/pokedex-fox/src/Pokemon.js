import React from 'react';
import './pokemon.css';


class Pokemon extends React.Component {
  render() {
    // recebe os dados de pokedex por props e aqui -> desconstructuring no objeto pegando as infomarções pertinentes para montar o card do pokemon
    const { name, type, averageWeight, image } = this.props.pokemon;

    return (
      <div className="pokemon">
        <div>
          <p>{ name }</p>
          <p>{ type }</p>
          <p>
            Average weight: { averageWeight.value } { averageWeight.measurementUnit }
          </p>
        </div>
        <img src={ image } alt={`${name} sprite`} />
      </div>
    );
  }
}

export default Pokemon;