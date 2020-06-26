import React, { Component } from 'react'

export default class ColorMe extends Component {
    constructor() {
        super();

        this.state = {
            color: "black",
            text: "Color Me!",
            colorText: "black",
            textText: "Color Me!"
        }

        this.updateColor = this.updateColor.bind(this);
        this.updateText = this.updateText.bind(this);
        this.updateFilter = this.updateFilter.bind(this);
    }

    updateColor(event) {
        this.setState({
            color: event.target.value,
        })
    }

    updateText(event) {
        this.setState({
            text: event.target.value,
        })
    }
    updateFilter() {
        this.setState({
            colorText: this.state.color,
            textText: this.state.text
        })
    }

    render() {
        return (
            <div className="color-me-wrapper">
                    <div className="size-wrapper" style={{color: this.state.colorText}}>
                        {this.state.textText}
                    </div>
                    <div className="bottom">
                        <input type="text" onChange={this.updateColor} placeholder={this.state.color}></input>
                    
                        <input type="text" onChange={this.updateText} placeholder={this.state.text}></input>
                        <button type="button" onClick={this.updateFilter}>
                            Submit
                        </button>
                    </div>
            </div>
        )
    }
}
