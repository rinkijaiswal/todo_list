import React, { Component } from 'react';

class Signup extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name: '',
             email:'',
             password:''
        }
    }

    handlePassword =  (e) =>{
        this.setState({
            password: e.target.value
        })
    }

    handleSubmit = () =>{
        alert(`Your name is ${this.state.name} and your email is ${this.state.email}`)
        this.props.history.push("/")
    }

    render() {
        return (
            <div>
                <form action="/" method="POST" onSubmit={this.handleSubmit}>
                    <input type="text"
                        placeholder="Enter name"
                        onChange={(e) => this.setState({name: e.target.value})}
                        name="name"
                        required />
                    <input type="text"
                        placeholder="Enter Email"
                        onChange={(e) => this.setState({email: e.target.value})}
                        name="email"
                        required/>
                    <input type="text"
                        placeholder="Enter Password"
                        onChange={this.handlePassword}
                        name="password"
                        required/>
                    <button type="submit">Submit</button>
                </form>
            </div>
        );
    }
}

export default Signup;