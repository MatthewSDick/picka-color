import React, { Component } from 'react'

class App extends React.Component {
  state = {
    // hue: 0,
    hue: Math.floor(Math.random() * 360),
    //saturation: 0,
    saturation: Math.floor(Math.random() * 100),
    //light: 0,
    light: Math.floor(Math.random() * 100),
    alpha: 1,
  }

  changeHue = e => {
    this.setState({
      hue: e.target.value,
    })
  }

  changeSaturation = e => {
    this.setState({
      saturation: e.target.value,
    })
  }

  changeLight = e => {
    this.setState({
      light: e.target.value,
    })
  }

  changeAlpha = e => {
    this.setState({
      alpha: e.target.value,
    })
  }

  randomColor = () => {
    const newHue = Math.floor(Math.random() * 360)
    const newSaturation = Math.floor(Math.random() * 360)
    const newLight = Math.floor(Math.random() * 360)
    console.log(newHue)
    this.setState({
      hue: newHue,
      saturation: newSaturation,
      light: newLight,
    })
  }

  render() {
    return (
      <>
        <div className="colorBox">
          <input
            className="color-result"
            style={{
              backgroundColor: `hsla(${this.state.hue}, ${this.state.saturation}%, ${this.state.light}%, ${this.state.alpha})`,
            }}
          ></input>
          <p className="colorInfo">{`hsla:${this.state.hue}, ${this.state.saturation}%, ${this.state.light}%, ${this.state.alpha}`}</p>

          <input
            onChange={this.changeHue}
            type="range"
            min="0"
            max="360"
            value={this.state.hue}
            className="hueSlider"
            id="myRange"
          ></input>
          <input
            onChange={this.changeSaturation}
            type="range"
            min="0"
            max="100"
            value={this.state.saturation}
            className="saturationSlider"
            id="myRange"
          ></input>
          <input
            onChange={this.changeLight}
            type="range"
            min="0"
            max="100"
            value={this.state.light}
            className="lightSlider"
            id="myRange"
          ></input>
          <input
            onChange={this.changeAlpha}
            type="range"
            min="0"
            max="1"
            step="0.01"
            value={this.state.alpha}
            className="alphaSlider"
            id="myRange"
          ></input>
          <br />
          <button className="randomColor" onClick={this.randomColor}>
            Random Color
          </button>
        </div>
      </>
    )
  }
}

export default App
