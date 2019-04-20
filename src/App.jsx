import React from 'react'
import Counter from './Counter'

class App extends React.Component {
  state = { showCounter: true, time: 500, detal: 10 }

  handleToggleCounter = () =>
    this.setState({ showCounter: !this.state.showCounter })
  timeChange = event => {
    this.setState({ time: event.target.value })
  }
  handleDeltaApp = nextDetal => {
    console.log(nextDetal)
    this.setState({ detal: nextDetal })
  }
  render() {
    return (
      <div>
        {this.state.showCounter ? (
          <div>
            <Counter
              name="Counter 1"
              time={this.state.time}
              initialautoIncreaseOn={false}
              onDetalChange={this.handleDeltaApp}
              detal={this.state.detal}
            />
            <Counter
              name="Counter 2"
              time={this.state.time}
              initialautoIncreaseOn={true}
              onDetalChange={this.handleDeltaApp}
              detal={this.state.detal}
            />
            <input
              type="text"
              value={this.state.time}
              onChange={this.timeChange}
            />
          </div>
        ) : null}

        <button onClick={this.handleToggleCounter}>
          {this.state.showCounter ? 'Hide' : 'Show'} counter
        </button>
      </div>
    )
  }
}

export default App
