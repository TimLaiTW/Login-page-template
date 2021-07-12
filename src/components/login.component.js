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
                <h1 className="text-large">Sing in</h1>
                <p className="text-normal">
                    New user? <a href='/sing-up'>Create an account</a>
                </p>
                <form className='form' onSubmit={this.handleSubmit}>
                    <div className='form-group'>
                        <label hidden>Email Address</label>
                        <input className='input-field' type='text' placeholder='Email Address' value={this.state.email} onChange={this.handleEmailChange}/>
                    </div>

                    <div className='form-group'>
                        <label hidden>Password</label>
                        <input className='input-field' type='text' placeholder='Password' value={this.state.password} onChange={this.handlePwdChange}/>
                    </div>

                    <button type='submit'>Login</button>
                </form>
                <p>
                    <a href='#'>Forget password?</a>
                </p>
                
            </div>
        )
    }
}
