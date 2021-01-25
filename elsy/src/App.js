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
    unit: "L",
    type: "water"
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

  constructor(props) {
    super(props)
    this.state = {
      water: 0,
      heart: 120,
      temperature: -10,
      steps: 3000
    };
  }
  onHeartChange = function (value) {
    this.setState({ heart: value })
  }
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <Box {...this.Water} /> {/* Water */}
          <Box {...this.Steps} /> {/* Steps */}
          <Box {...this.Heart} /> {/* Heart */}
          <Box {...this.Temperature} /> {/* Temperature */}
        </div>
      </div>
    );
  }
}

export default App;