import React from 'react';
import LandingPage from './components/LandingPage';
import MapSection from './components/map'

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
