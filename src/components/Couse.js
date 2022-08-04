import React,{Component} from 'react';


//class component

class Couse extends Component{

    constructor(props) {
        super(props)
    
        this.state = {
            isLoggedIn: true,
            users:[
                {
                    id:1,
                    name: 'rinki'
                 },
                 {
                     id:2,
                     name:'shivam'
                 }
                ],
            id: this.props.match.params.id,
            course: this.props.match.params.course

        }
    }
    
    render(){
        return(
            <div>{this.state.id} - {this.state.course}
            </div>
            
                // this.state.isLoggedIn ?
                // <div style={{background:'red'}}>{this.state.users.map(user =>(
                //     <p>my name is {user.name} and my id is {user.id}</p>
                // ))}</div>:
                // <div><p>Error occurred</p></div>
        )
    }
}

export default Couse;