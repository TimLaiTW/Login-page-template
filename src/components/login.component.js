import React, { Component } from 'react'
export default class login extends Component {
    constructor(props){
        super(props);
        this.state = {
            email: '',
            password: ''
        }
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handlePwdChange = this.handlePwdChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handlePwdChange(event){
        this.setState({password: event.target.value});
    }
    handleEmailChange(event){
        this.setState({ email: event.target.value});
    }

    handleSubmit(event){
        alert('Submitted: ' + this.state.email + this.state.password);
        event.preventDefault();
        //Do something here...
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Email
                        <input type='text' value={this.state.email} onChange={this.handleEmailChange}/>
                    </label>

                    <label>Password
                        <input type='text' value={this.state.password} onChange={this.handlePwdChange}/>
                    </label>
                    <input type='submit' value='submit'/>
                </form>
                <p>
                    Forget <a href='#'>password?</a>
                </p>
                <p>
                    Not a member? <a href='/sing-up'>Sign up</a>
                </p>
            </div>
        )
    }
}
