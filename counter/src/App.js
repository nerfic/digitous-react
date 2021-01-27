import React from "react";
import Counter from "./components/Counter.jsx";
import "./App.css";


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      increment: "+",
      decrement: "-",
    }
  }

  decrementCount = () => {
    let result = this.state.count;
    if (result === 0) {
      this.setState({ count: result })
    } else {
      result--;
      this.setState({ count: result })
    }
  }
  incrementCount = () => {
    let result = this.state.count;
    result++;
    this.setState({ count: result })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Counter</h1>
          <Counter count={this.state.count} decrementCount={this.decrementCount} incrementCount={this.incrementCount} />
        </header>
      </div>
    );
  }
}

export default App;