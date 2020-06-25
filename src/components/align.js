import React, { Component } from 'react'

export default class Align extends Component {
    constructor(props) {
        super(props);

        this.state = {
            display: false
        }
    }

    leftAlign() {
        this.setState((displayState) => ({
            displayLeft: displayState.displayLeft,
            displayCenter: displayState.displayCenter,
            displayRight: displayState.displayRight
        }))

    }

    centerAlign() {
        this.setState((displayState) => ({
            displayCenter: displayState.displayCenter,
            displayRight: displayState.displayRight,
            displayLeft: displayState.displayLeft,
        }))
        
    }

    rightAlign() {
        this.setState((displayState) => ({
            displayRight: displayState.displayRight,
            displayCenter: displayState.displayCenter,
            displayLeft: displayState.displayLeft
        }))
        
    }

    render() {
        return (
            <div className="align-wrapper">

                <div className="align-text-wrapper">
                     <div className="left">
                        {this.state.displayLeft && this.props.text}
                    </div>
                    <div className="center">
                        {this.state.displayCenter && this.props.text}
                    </div>
                    <div className="right">
                        {this.state.displayRight && this.props.text}
                    </div>
                </div>
                <div className="buttons-wrapper" onClick={() => this.delete}>
                    <button onClick={() => this.leftAlign()}>
                        Left
                    </button>
                    <button onClick={() => this.centerAlign()}>
                        Center
                    </button>
                    <button onClick={() => this.rightAlign()}>
                        Right
                    </button>
                </div>
            </div>
        )
    }
}
