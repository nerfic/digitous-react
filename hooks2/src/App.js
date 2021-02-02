import './App.css';
import Box from "./components/Box/Box"
import React, { useState } from 'react';


const tempMin = -20;
const tempMax = 40;
const heartMin = 80;
const heartMax = 180;
const stepsMin = 0;
const stepsMax = 50000;

function App() {

  const water = {
    icon: "local_drink",
    color: "#3A85FF",
    value: 1.5,
    unit: "L",
    type: "water"
  }

  const steps = {
    icon: "directions_walk",
    color: "black",
    value: 3000,
    unit: "steps"
  }

  const heart = {
    icon: "favorite",
    color: "red",
    value: 120,
    unit: "bpm",
  }

  const temperature = {
    icon: "wb_sunny",
    color: "yellow",
    value: -10,
    unit: "°C"
  }

  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          <Box icon={water.icon} />
        </div>
      </div>
    </div>
  );
}

export default App;
