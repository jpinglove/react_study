
import React, { Component } from 'react';

class Counter extends React.Component{
    constructor(props){
        super(props);
        this.cnt = props.count;
        this.state = {count:this.cnt};
    }

    increment=()=>{
        this.setState({count: this.state.count+1});
    }

    render(){
        return (
            <div>
                <p>count:{this.state.count}</p>
                <button onClick={this.increment}>increment</button>
            </div>
        );
    }

}

export default Counter;
