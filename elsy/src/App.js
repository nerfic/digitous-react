import React from "react";
import './App.css';
import './styles/global.css'
import Box from "./components/Box"

const tempMin = -20;
const tempMax = 40;
const heartMin = 80;
const heartMax = 180;
const stepsMin = 0;
const septsMax = 50000;

export class App extends React.Component {

  Water = {
    icon: "local_drink",
    color: "#3A85FF",
    value: 1.5,
    unit: "L"
  }

  Steps = {
    icon: "directions_walk",
    color: "black",
    value: 3000,
    unit: "steps"
  }

  Heart = {
    icon: "favorite",
    color: "red",
    value: 120,
    unit: "bpm"
  }

  Temperature = {
    icon: "wb_sunny",
    color: "yellow",
    value: -10,
    unit: "°C"
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <Box icon={this.Water.icon} color={this.Water.color} value={this.Water.value} unit={this.Water.unit} /> {/* Water */}
          <Box icon={this.Steps.icon} color={this.Steps.color} value={this.Steps.value} unit={this.Steps.unit} /> {/* Steps */}
          <Box icon={this.Heart.icon} color={this.Heart.color} value={this.Heart.value} unit={this.Heart.unit} /> {/* Heart */}
          <Box icon={this.Temperature.icon} color={this.Temperature.color} value={this.Temperature.value} unit={this.Temperature.unit} /> {/* Temperature */}
        </div>
      </div>
    );
  }
}

export default App;