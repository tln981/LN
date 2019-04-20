import React from 'react'

export default class Taskitem extends React.Component {
  render() {
    return (
      <div>
        <input type="checkbox" />
        {this.props.task}
      </div>
    )
  }
}
