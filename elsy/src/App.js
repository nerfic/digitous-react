import React from "react";
import './App.css';
import './styles/global.css'
import Box from "./components/Box"

const tempMin = -20;
const tempMax = 40;
const heartMin = 80;
const heartMax = 180;
const stepsMin = 0;
const stepsMax = 50000;

export class App extends React.Component {

  water = {
    icon: "local_drink",
    color: "#3A85FF",
    value: 1.5,
    unit: "L",
    type: "water"
  }

  steps = {
    icon: "directions_walk",
    color: "black",
    value: 3000,
    unit: "steps"
  }

  heart = {
    icon: "favorite",
    color: "red",
    value: 120,
    unit: "bpm",
  }

  temperature = {
    icon: "wb_sunny",
    color: "yellow",
    value: -10,
    unit: "°C"
  }

  constructor(props) {
    super(props)
    this.state = {
      water: 1.5,
      heart: 120,
      temperature: -10,
      steps: 3000,
      onHeartChange: (value) => {
        this.setState({ heart: value.target.value });
        this.calculateWater()
      },
      onStepsChange: (value) => {
        this.setState({ steps: value.target.value });
        this.calculateWater()
      },
      onTemperatureChange: (value) => {
        this.setState({ temperature: value.target.value });
        this.calculateWater()
      },
    };
  }

  calculateWater = () => {

    let result = 1.5;

    if (this.state.temperature > 20) {
      result += 0.02 * this.state.temperature;
    }
    if (this.state.heart > 120) {
      result += 0.0008 * this.state.heart;
    }
    if (this.state.steps > 10000) {
      result += 0.00002 * this.state.steps;
    }
    result = Math.round(result * 100) / 100;
    this.setState({ water: result })
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <Box {...this.water} value={this.state.water} /> {/* Water */}
          <Box {...this.steps} onChange={this.state.onStepsChange} value={this.state.steps} min={stepsMin} max={stepsMax} /> {/* Steps */}
          <Box {...this.heart} onChange={this.state.onHeartChange} value={this.state.heart} min={heartMin} max={heartMax} /> {/* Heart */}
          <Box {...this.temperature} onChange={this.state.onTemperatureChange} value={this.state.temperature} min={tempMin} max={tempMax} /> {/* Temperature */}
        </div>
      </div>
    );
  }
}

export default App;