import React from 'react'

export default class Taskinput extends React.Component {
  state = { value: '' }
  handleChange = event => {
    const nextValue = event.target.value
    this.setState({ value: nextValue })
  }
  handleKeyPress = event => {
    const value = this.state.value
    if (event.key === 'Enter') {
      this.props.onTaskSubmit(value)
      this.setState({ value: '' })
    }
  }
  render() {
    return (
      <div>
        <input
          placeholder="aaaa"
          value={this.state.value}
          onChange={this.handleChange}
          onKeyPress={this.handleKeyPress}
        />
      </div>
    )
  }
}
