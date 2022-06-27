import React from 'react';
import logo from './logo.png';
import temperatureIcon from './ressources/icons/temperatureIcon.svg';
import sunIcon from './ressources/icons/sunIcon.svg';
import './App.css';
import SensorPage from "./sensors/pages/sensorPage/sensorPage";

function App() {
    return (
        <div className="App">
          <header className="App-header">
            <SensorPage/>
          </header>
        </div>
    );
}

export default App;
