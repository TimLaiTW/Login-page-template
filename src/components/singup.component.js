import React, { Component } from 'react'

export default class singup extends Component {
    constructor(props){
        super(props)
        this.state = {
            firstname: '',
            lastname: '',
            email: '',
            password: ''
        }
        this.handleFirstNameChange = this.handleFirstNameChange.bind(this);
        this.handlelastNameChange = this.handlelastNameChange.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleFirstNameChange(event){
        this.setState({firstname: event.target.value});
    }
    handlelastNameChange(event){
        this.setState({lastname: event.target.value});
    }
    handleEmailChange(event){
        this.setState({email: event.target.value});
    }
    handlePasswordChange(event){
        this.setState({password: event.target.value});
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
                    <label>First name
                        <input type='text' value={this.state.firstname}  onChange={this.handleFirstNameChange}/>
                    </label>
                    <label>Last name
                        <input type='text' value={this.state.lastname}  onChange={this.handlelastNameChange}/>
                    </label>
                    <label>Email
                        <input type='text' value={this.state.email}  onChange={this.handleEmailChange}/>
                    </label>
                    <label>Password
                        <input type='text' value={this.state.password}  onChange={this.handlePasswordChange}/>
                    </label>
                    <input type='submit' value='submit' />
                </form>
                <p>
                    Already registered? <a href='/sing-in'>Sign in</a>
                </p>
            </div>
        )
    }
}
