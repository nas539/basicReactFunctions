import React, { Component } from 'react'

export default class UpAndDown extends Component {
    // constructor(props) {
    //     super(props);

    //     this.state = {

    //     }
    // }

    // up() {

    // }

    // down() {

    // }

    render() {
        return (
            <div className="up-and-down-wrapper">
                <div className="up-btn">
                    <button onClick={() => this.up()}>
                        Up
                    </button>
                </div> 
                
                <div className="number-wrapper">
                    <h4>
                        0
                    </h4>
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
