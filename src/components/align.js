import React, { Component } from 'react'

export default class Align extends Component {
    constructor(props){
        super(props);

        this.state = {

        }
    }

    leftAlign() {

    }

    centerAlign() {
        
    }

    rightAlign() {
        
    }

    render() {
        return (
            <div className="align-wrapper">
                <div className="align-text-wrapper">
                    {this.props.text}
                </div>
                <div className="buttons=wrapper">
                    <button onClick={() => leftAlign()}>
                        Left
                    </button>
                    <button onClick={() => centerAlign()}>
                        Center
                    </button>
                    <button onClick={() => rightAlign()}>
                        Right
                    </button>

                </div>
            </div>
        )
    }
}
