import React, { Component } from 'react';

class NewPerson extends Component {

    constructor(props){
        super(props);
        this.state={
            age: this.props.age
        }

    }

    birthday = () => {
        
        this.setState({age: this.state.age + 1})
    }
    render(){
        return(
            <div>
                <h1>
                {this.props.lastName}, {this.props.firstName}
                </h1>
                <p>Age: {this.state.age}</p>
                <p>Hair Color: {this.props.hairColor}</p>
                <button onClick={this.birthday}>It's {this.props.firstName} Birthday! Age+1</button>
            </div>
        )
    }
}

export default NewPerson;
