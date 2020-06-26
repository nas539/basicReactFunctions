import React, { Component } from 'react'

export default class Pixels extends Component {
    constructor() {
        super();

        this.state = {
            number: 20,
            increaseBy: 1
        }

        this.bigger = this.bigger.bind(this);
        this.smaller = this.smaller.bind(this);
    }

    bigger() {

    }

    smaller() {

    }

    render() {
        return (
            <div className="pixels-wrapper">
                <form className="pixels-form">
                    
                    <div className="pixel-number-wrapper">
                        {this.state.number}px
                    </div>
                    <input placeholder="Increase by number">

                    </input>
                    <button className="btn" onClick={() => this.bigger()}>
                        Bigger
                    </button>
                    <button className="btn" onClick={() => this.smaller()}>
                        Smaller
                    </button>
                    



                </form>
            </div>
        )
    }
}
