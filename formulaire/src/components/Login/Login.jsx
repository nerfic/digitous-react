import React from 'react'

class Login extends React.Component {
    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-6">
                        <label className="form-label">Email adress:</label>
                        <input type="email" className={this.props.emailClass} placeholder="Email" onChange={this.props.emailValid} required />
                        <label className="form-label">Password:</label>
                        <input type="password" className={this.props.passwordClass} placeholder="Password" onChange={this.props.passwordValid} required />
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                            <label className="form-check-label">
                                Remember me
                            </label>
                        </div>
                        <button type="button" className="btn btn-primary" disabled>Submit</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Login;