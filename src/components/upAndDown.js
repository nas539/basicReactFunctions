import React, { Component } from 'react'

export default class UpAndDown extends Component {
    constructor() {
        super();

        this.state = {
            text: 0
        }
        this.up = this.up.bind(this)
        this.down = this.down.bind(this)
    }

    up() {
        this.setState({
            text: this.state.text + 1
        })
        
    }

    down() {
        this.setState({
            text: this.state.text - 1
        })
        
    }

    render() {
        return (
            <div className="up-and-down-wrapper">
                <div className="up-btn">
                    <button onClick={() => this.up()}>
                        Up
                    </button>
                </div> 
                
                <div className="number-wrapper">
                        {this.state.text}
                </div>

                <div className="down-btn">
                    <button onClick={() => this.down()}>
                        Down
                    </button>
                </div> 
                
            </div>
        )
    }
}
