import React, { Component } from 'react';
import {Link} from 'react-router-dom'

class Login extends Component {
    constructor(props) {
        super(props);
        this.state  = {
            id: this.props.match.params.id,
            name: "rinki"
        }
    }
    
    render() {
        return (
            <div>
               <Link to={"/course/" + this.state.id + "/" + this.state.name}>Course</Link> 
            </div>
        );
    }
}

export default Login;