import React from 'react'
import { isFulfilled } from 'q'

const getColor = value => {
  if (value == 0) return 'black'
  if (value < 0) return 'red'
  if (value > 0) return 'green'
}
class Counter extends React.Component {
  state = {
    value: 0,
    detal: this.props.initialDelta || 0,
    autoIncreaseOn: this.props.initialautoIncreaseOn,
  }
  interval = null
  change = value => {
    const curentValue = this.state.value
    this.setState({ value: curentValue + value })
  }
  changeDetal = value => {
    const curentValue = this.state.detal
    this.setState({ detal: curentValue + value })
  }
  reset = () => {
    this.setState({ value: 0 })
  }
  autoIncrease = () => {
    this.setState({ autoIncreaseOn: !this.state.autoIncreaseOn })
    if (this.state.autoIncreaseOn) {
      this.interval = setInterval(() => {
        this.change(this.state.detal)
      }, this.props.time)
    } else {
      clearInterval(this.interval)
    }
  }

  componentDidMount() {
    this.autoIncrease()
  }

  render() {
    const value = this.state.value
    const detal = this.state.detal
    return (
      <div>
        <h1>{this.props.name}</h1>
        <div>
          current value: <span style={{ color: getColor(value) }}>{value}</span>
        </div>
        <div>
          <button onClick={() => this.change(this.state.detal)}>
            Update <span>({this.state.value + this.state.detal})</span>
          </button>
        </div>
        <div>
          delta: <span style={{ color: getColor(detal) }}>{detal}</span>
        </div>
        <div>
          <button onClick={() => this.changeDetal(1)}>Increase</button>
          <button onClick={() => this.changeDetal(-1)}>Decrease</button>
        </div>
        <div>
          <button onClick={this.autoIncrease}>
            {this.state.autoIncreaseOn ? 'start' : 'stop'} auto Increase
          </button>
        </div>
      </div>
    )
  }
  componentWillUnmount() {
    clearInterval(this.interval)
  }
}

export default Counter
