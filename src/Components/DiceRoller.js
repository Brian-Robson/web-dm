import React from 'react';
import { render } from 'react-dom';

class DiceRoller extends React.Component {
    
    constructor(props) {
        super();
        this.state = { 
            output: "No output.", 
            rand: 0,
            results: ""
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        const number = this.props.number;
        const min = 1;
        const max = this.props.max;
        const options = this.props.options;
        var rand = [];
        for (var i = 0; i < number; i++) {
            rand.push(Math.floor(Math.random() * (max - min + 1)) + min);
        }
        var output = "";
        for (var j = 0; j < number; j++) {
          if (j === rand.length - 1) {
            output = output.concat(rand[j] + ".");
          }
          else {
            output = output.concat(rand[j] + ", ")
          }
        }
        var results = [];
        for (var k = 0; k < number; k ++) {
            var temp = "";
            temp = options[rand[k] - 1]
            results.push(<li>{temp}</li>)
        }
        this.setState({ output: output, rand: rand, results: results })
    }
    
    render() {
        return (
            <div>
                <button onClick={this.handleClick.bind(this)}>Roll {this.props.number}d{this.props.max}</button>
                {/*<div>Results: {this.state.output}</div>*/}
                <ul>
                    {this.state.results}
                </ul>
            </div>
        )
    }
}

export default DiceRoller;