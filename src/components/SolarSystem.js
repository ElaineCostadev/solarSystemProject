import React, { Component } from 'react';
import Title from './Title';
import PlanetCard from './PlanetCard';
import planets from '../data/planets';

class SolarSystem extends Component {
  render() {
    // const { planets } = this.props;
    // vou utilizar o PlanetCard para organizar as informações que virao da lista
    return (
      <div data-testid="solar-system" className="divSolarSystem">
        <Title headline="Planetas" />
        {planets.map(({ name, image }) => (<PlanetCard
          key={ name }
          planetName={ name }
          planetImage={ image }
        />))}
      </div>
    );
  }
}

export default SolarSystem;
// <Title headline="Planetas" />

/* {planets.map(({ name, image }) => (<PlanetCard
    key={ name }
    planetName={ name }
    planetImage={ image }
  />))}
  ; */
