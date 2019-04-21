import React from 'react'

export default class Taskitem extends React.Component {
  handleToggleCheck = () => {
    const currentChecked = this.props.checked
    this.props.onToggleChecked(!currentChecked)
  }
  render() {
    return (
      <div>
        <input
          type="checkbox"
          checked={this.props.checked}
          onChange={this.handleToggleCheck}
        />
        {this.props.task.value}
        <button onClick={() => this.props.onRemove(this.props.id)}>
          remove
        </button>
      </div>
    )
  }
}
