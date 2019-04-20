import React from 'react'
import Taskitem from './Component/Taskitem'
import Taskinput from './Component/Taskinput'
export default class TodoApp extends React.Component {
  state = { tasks: [], checked: [] }
  handleTaskSubmit = task => {
    const currentTask = this.state.tasks
    const nextTasks = currentTask.concat(task)
    this.setState({ tasks: nextTasks })
  }

  handleChecked = task => {
    const currentTask = this.state.checked
    const nextTasks = currentTask.concat(task)
    this.setState({ checked: nextTasks })
  }
  render() {
    return (
      <div>
        <h2 style={{ marginBottom: 24 }}>Todo App</h2>
        <Taskinput onTaskSubmit={this.handleTaskSubmit} />
        <div>
          {this.state.checked.length}/{this.state.tasks.length}
        </div>
        <div style={{ marginTop: 24 }}>
          {this.state.tasks.map((task, idx) => (
            <Taskitem
              task={task}
              key={idx}
              onCheckedSubmit={this.handleChecked}
            />
          ))}
        </div>
      </div>
    )
  }
}
