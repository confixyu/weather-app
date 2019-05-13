import React, { Component } from 'react';
import './App.css';
import LocationList from './components/LocationList';

const cities = [
  'Barranquilla, Col',
  'Bogota, Col',
  'Chicago, US',
  'New You,Us'
];

class App extends Component {
  render() {
    return (
      <div className="App">
        <LocationList cities= {cities}></LocationList>
      </div>
    );
  }
}

export default App;
