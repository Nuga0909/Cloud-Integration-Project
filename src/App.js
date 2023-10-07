import React from 'react';
import './App.css';
import LandingPage from './LandingPage';
import MapSection from './map'

const location = {
  address: '10, Market Street, Somolu, Lagos State.',
  lat: 6.533805520242892,
  lng: 3.375872797362381, 
}

function App() {
  return (
    <div className="App">
      <LandingPage />
      <MapSection location={location} zoomLevel={17} />
    </div>
  );
}

export default App;
