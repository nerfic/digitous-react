import React from "react"
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from "./components/Login/Login"

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      email: "",
      password: "",
      emailValid: false,
      passwordValid: false,
      classEmail: "form-control is-invalid",
      classPassword: "form-control is-invalid",
      classButton: "btn btn-primary disabled",
      onEmailChange: (e) => {
        this.setState({ email: e.target.value })
        let reg = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
        if (reg.test(this.state.email)) {
          this.setState({ classEmail: "form-control is-valid" })
          this.setState({ emailValid: true })
        } else {
          this.setState({ classEmail: "form-control is-invalid" })
          this.setState({ emailValid: false })
        }
        this.state.isValid();
      },
      onPasswordChange: (e) => {
        this.setState({ password: e.target.value })
        if (this.state.password.length > 3) {
          this.setState({ classPassword: "form-control is-valid" })
          this.setState({ passwordValid: true })
        } else {
          this.setState({ classPassword: "form-control is-invalid" })
          this.setState({ passwordValid: false })
        }
        this.state.isValid();
      },
      isValid: () => {
        if (this.state.emailValid && this.state.passwordValid) {
          console.log("les deux sont good")
          this.setState({ classButton: "btn btn-primary" })
        } else {
          console.log("fail")
          this.setState({ classButton: "btn btn-primary disabled" })
        }
      }
    };
  }

  render() {
    return (
      <div>
        <div className="container">
          <Login buttonClass={this.state.classButton} emailClass={this.state.classEmail} emailValid={this.state.onEmailChange} passwordClass={this.state.classPassword} passwordValid={this.state.onPasswordChange} />
        </div>
      </div>
    )
  }

  renderValid() {
    return (
      <p>Validé</p>
    )
  }
}

export default App;
