import React , { Component } from 'react'
import PropTypes from 'prop-types'

class Register extends Component {
    constructor() {
        super()

        this.state = {
            error: false,
            username: '',
            password: ''
        }
    }

    _handleSubmit = (e) => {
        const newUser = this.props.createUser(e)
    }

    render() {
        const user = {
            username: this.state.username,
            password: this.state.password
        }
        return (
            <div className="RegisterContainer">
                <p> Create An Account</p>
                <div className="RegisterForm">
                    <form onSubmit={e => {
                        e.preventDefault()
                        this.setState({
                            userNameInputValue: '',
                            passwordInputValue: ''
                        })

                       this.props.createUser(user)

                    }}>
                        <input className="StandardInput" placeholder="Username here..." value={this.state.username}
                               onChange={e => this.setState({
                                   username: e.target.value,
                               })}
                        />
                        <input className="StandardInput" type='password' placeholder="Password here..." value={this.state.password}
                               onChange={e => this.setState({
                                   password: e.target.value,
                               })}
                        />

                        <button type="submit"> Create Account </button>
                    </form>
                </div>
            </div>

        )
    }
}

Register.propTypes = {
    createUser: PropTypes.func.isRequired
}


export default Register