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
      },
      isValid: () => {
        if (this.state.emailValid && this.state.passwordValid) {
          console.log("les deux sont good")
        } else {
          console.log("fail")
        }
      }
    };
  }

  render() {
    return (
      <div>
        <div className="container">
          <Login emailClass={this.state.classEmail} emailValid={this.state.onEmailChange} passwordClass={this.state.classPassword} passwordValid={this.state.onPasswordChange} />
        </div>
      </div>
    )
  }
}

export default App;
