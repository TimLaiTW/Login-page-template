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
                <h3>Sing in</h3>
                <form onSubmit={this.handleSubmit}>
                    <div className='form-group'>
                        <label>Email</label>
                        <input type='text' value={this.state.email} onChange={this.handleEmailChange}/>
                    </div>

                    <div className='form-group'>
                        <label>Password</label>
                        <input type='text' value={this.state.password} onChange={this.handlePwdChange}/>
                    </div>

                    <button type='submit'>Submit</button>
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
