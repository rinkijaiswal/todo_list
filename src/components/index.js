import React,{Component} from 'react';
import Header from './Header';

//class component

class Index extends Component{

    constructor(props) {
        super(props)
    
        this.state = {
             message:'Welcome visitor',
             count:0,
        }
    }

    changeMessage(){
        this.setState({
            message: 'Thank you',
            count: this.state.count+1
        })
    }
    
    render(){
        const {message, count} = this.state
        return(
            <div className="Index">
                <Header/>
                <h1>{message}</h1>
                <button onClick={() => this.changeMessage()}>{count} Subscribe</button>
                {/* comment */}
            </div>
        )
    }
}

export default Index;