import React, { Component } from 'react'

export default class Align extends Component {
    constructor() {
        super();

        this.state = {
            textLeft: "",
            textCenter: "Align Me!",
            textRight: ""
        }

        this.leftAlign = this.leftAlign.bind(this);
        this.centerAlign = this.centerAlign.bind(this);
        this.rightAlign = this.rightAlign.bind(this);
    }

    leftAlign() {
        this.setState({
            textLeft: "Align Me!",
            textCenter: "",
            textRight: ""
        })

    }

    centerAlign() { 
        this.setState({
            textLeft: "",
            textCenter: "Align Me!",
            textRight: ""
        })  
    }

    rightAlign() {
        this.setState({
            textLeft: "",
            textCenter: "",
            textRight: "Align Me!"
        })
      
    }

    render() {
        return (
            <div className="align-wrapper">

                <div className="align-text-wrapper">
                     <div className="left">
                        {this.state.textLeft}
                    </div>
                    <div className="center">
                        {this.state.textCenter}
                    </div>
                    <div className="right">
                        {this.state.textRight}
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
