import React from "react";

class CounterClass extends React.Component{
    constructor(){
        super();
        this.setterFunction = this.setterFunction.bind(this);
        this.state  = {
            number:0
        };

    }

    setterFunction(){
        this.setState({
            number : ++this.state.number
        })
    }

    render(){
        return(
            <div>
                <h3>This is class base component</h3>
                <h1>Conter Value : {this.state.number}</h1>
                <button onClick={this.setterFunction}>Increment</button>
            </div>
        )
    }

}

export default CounterClass;