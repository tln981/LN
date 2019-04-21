import React from 'react'
import Taskitem from './Component/Taskitem'
import Taskinput from './Component/Taskinput'
export default class TodoApp extends React.Component {
  state = { tasks: [] }
  handleTaskSubmit = task => {
    const currentTask = this.state.tasks
    const nextTasks = currentTask.concat([
      {
        value: task,
        checked: false,
      },
    ])
    this.setState({ tasks: nextTasks })
  }
  handleTaskToggleChecked = (taskIdx, checked) => {
    const currentTasks = this.state.tasks
    currentTasks[taskIdx].checked = checked
    this.setState({ task: currentTasks })
  }
  handleRemove = idx => {
    const newTasks = this.state.tasks.filter(
      task => task !== this.state.tasks[idx],
    )
    this.setState({ tasks: newTasks })
  }
  render() {
    const checkedTasksCount = this.state.tasks.filter(task => task.checked)
      .length
    return (
      <div>
        <h2 style={{ marginBottom: 24 }}>Todo App</h2>
        <Taskinput onTaskSubmit={this.handleTaskSubmit} />
        {this.state.tasks.length ? (
          <div>
            Checked: {checkedTasksCount}/{this.state.tasks.length}{' '}
            {checkedTasksCount === this.state.tasks.length ? 'Done!' : null}
          </div>
        ) : (
          'No tasks yet!'
        )}
        <div style={{ marginTop: 24 }}>
          {this.state.tasks.map((task, idx) => (
            <Taskitem
              task={task}
              key={idx}
              id={idx}
              checked={task.checked}
              onToggleChecked={checked =>
                this.handleTaskToggleChecked(idx, checked)
              }
              onRemove={this.handleRemove}
            />
          ))}
        </div>
      </div>
    )
  }
}
