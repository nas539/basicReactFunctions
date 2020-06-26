import React, { Component } from 'react'

export default class Align extends Component {
    // constructor(props) {
    //     super(props);

    //     this.state = {
    //         displayLeft: false,
    //         displayCenter: true,
    //         displayRight: false
    //     }
    // }

    // leftAlign() {
    //     this.setState({
    //         displayLeft: this.props.style.{{visibility: hidden}},
    //         displayCenter: {visibility: visible},
    //         displayRight: {visibility: hidden}
    //     })

    // }

    // centerAlign() {
    //     this.setState({
            
    //     })
        
    // }

    // rightAlign() {
    //     this.setState((displayState) => ({
    //         displayLeft: {visibility: hidden},
    //         displayCenter: {visibility: visible},
    //         displayRight: {visibility: hidden}
    //     }))
        
    // }

    render() {
        return (
            <div className="align-wrapper">

                <div className="align-text-wrapper">
                     <div className="left">
                        {/* {!this.state.displayLeft && this.props.text && } */}
                        {this.props.text}
                    </div>
                    <div className="center">
                        {/* {!this.state.displayCenter && this.props.text && this.props.style} */}
                        {this.props.text}
                    </div>
                    <div className="right">
                        {/* {!this.state.displayRight && this.props.text && this.props.style} */}
                        {this.props.text}
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
