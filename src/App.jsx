import React from 'react'
import Counter from './Counter'

class App extends React.Component {
  state = { showCounter: true, time: 500, detal: 10 }

  handleToggleCounter = () =>
    this.setState({ showCounter: !this.state.showCounter })
  timeChange = event => {
    this.setState({ time: event.target.value })
  }
  render() {
    return (
      <div>
        {this.state.showCounter ? (
          <div>
            <Counter
              name="Counter 1"
              initialDelta={this.state.detal}
              time={this.state.time}
              initialautoIncreaseOn={false}
            />
            <Counter
              name="Counter 2"
              initialDelta={this.state.detal}
              time={this.state.time}
              initialautoIncreaseOn={true}
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
