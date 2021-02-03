import React from "react";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from "./components/Button"
import Card from "./components/Card"

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: "",
      capital: "",
      flag: "",
      population: "",
      region: "",
    }
  }

  getCountry = (country) => {
    fetch(`https://restcountries.eu/rest/v2/name/${country}`)
      .then(res => res.json())
      .then(countries => {
        this.setState({
          name: countries[0].name,
          capital: countries[0].capital,
          flag: countries[0].flag,
          population: countries[0].population,
          region: countries[0].region,
        })
      })
      .catch(error => console.error(error))
  }

  componentDidMount() {
    fetch("https://restcountries.eu/rest/v2/name/france")
      .then(res => res.json())
      .then(countries => {
        this.setState({
          name: countries[0].name,
          capital: countries[0].capital,
          flag: countries[0].flag,
          population: countries[0].population,
          region: countries[0].region,
        })
      })
      .catch(error => console.error(error))
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div class="row">
            <Button onClick={(e) => this.getCountry("France")}>France</Button>
            <Button onClick={(e) => this.getCountry("brazil")}>Brazil</Button>
            <Button onClick={(e) => this.getCountry("croatia")}>Croatia</Button>
          </div>

          <Card pays={this.state.name} capital={this.state.capital} region={this.state.region} population={this.state.population} img={this.state.flag}></Card>
        </header>
      </div>
    );
  }
}

export default App;