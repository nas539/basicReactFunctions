import React, { Component } from 'react';


export default class Pixels extends Component {
    constructor(props) {
        super(props);

        this.state = {
            increaseBy: 1,
            number: 20
        }

        this.bigger = this.bigger.bind(this);
        this.smaller = this.smaller.bind(this);
        this.updateInput = this.updateInput.bind(this)
    }

    updateInput(event) {
        this.setState({
            increaseBy: event.target.value
        })
    }

    bigger() {
        this.setState({
            increaseBy: this.state.increaseBy,
            number: Number(this.state.number) + Number(this.state.increaseBy)
        })
    }

    smaller() {
        this.setState({
            increaseBy: this.state.increaseBy,
            number: this.state.number - this.state.increaseBy
        })
    }

    render() {
        return (
            <div className="pixels-wrapper">
        
                    <div className="top">
                         <div className="pixel-number-wrapper" style={{fontSize: this.state.number}}>
                                {this.state.number}px
                        </div>
                        <div style={{fontSize: this.state.number}}>
                        Increase By:{" "}
                        <input type="text" onChange={this.updateInput} placeholder={this.state.increaseBy}>

                       </input>
                       </div>
                    </div>
                    <div className="bottom">
                        <button type="button" className="btn" onClick={() => this.bigger()}>
                            Bigger
                        </button>
                        <button type="button" className="btn" onClick={() => this.smaller()}>
                            Smaller
                        </button>
                    </div>
            
            </div>
        )
    }
}
