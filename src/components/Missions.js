import React, { Component } from 'react';
import Title from './Title';
import MissionCard from './MissionCard';
import missions from '../data/missions';

class Missions extends Component {
  render() {
    // const { Missions } = missions;
    // console.log(Missions);
    // console.log(missions[0].name);
    //  missions.map(({name, year, country, destination}) => console.log(name, year, country, destination))
    return (
      <div data-testid="missions" className="divMissions">
        <Title headline="Missões" />
        {missions.map(({ name, year, country, destination }) => (<MissionCard
          key={ name }
          name={ name }
          year={ year }
          country={ country }
          destination={ destination }
        />))}
      </div>
    );
  }
}

export default Missions;
