import React from "react";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from "./components/Button"
import Card from "./components/Card"
import Search from "./components/Search"

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: "",
      capital: "",
      flag: "",
      population: "",
      region: "",
      searchValue: "",
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

  onSearch = (e) => {
    this.setState({
      searchValue: e.target.value
    })
  }

  onClickSearch = () => {
    this.getCountry(this.state.searchValue)
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
          <div className="row">
            <Search onChange={this.onSearch} onClick={this.onClickSearch}></Search>
          </div>
          <div className="row">
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