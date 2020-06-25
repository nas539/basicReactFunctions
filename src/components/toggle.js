import React, { Component } from 'react'

export default class Toggle extends Component {
    constructor(props) {
        super(props);

        this.state = {
            display: false,
        }
    }

    toggle() {
        this.setState((displayState) => ({
            display: !displayState.display
        }))
    }

    render() {
        return (
            <div className="toggle-wrapper">
                <div className="text-wrapper"> 
                 {!this.state.display && this.props.text}
                </div>  
                <button 
                 onClick={() => this.toggle()}>
                     Toggle
                </button>
            </div>
        )
    }
}
