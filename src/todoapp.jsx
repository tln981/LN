import React from 'react'
import Taskitem from './Component/Taskitem'
import Taskinput from './Component/Taskinput'
export default class TodoApp extends React.Component {
  state = { listCount: 3, selectedListIdx: 0, tasks: [] }
  handleTaskSubmit = task => {
    const currentTask = this.state.tasks
    const nextTasks = currentTask.concat([
      {
        value: task,
        checked: false,
        id: Date.now(),
        listIdx: this.state.selectedListIdx,
      },
    ])
    this.setState({ tasks: nextTasks })
  }
  handleTaskToggleChecked = (taskId, checked) => {
    const { tasks } = this.state
    const checkedTaskIdx = tasks.findIndex(task => task.id === taskId)
    tasks[checkedTaskIdx].checked = checked
    this.setState({ tasks })
  }
  handleTaskRemove = taskId => {
    const { tasks } = this.state
    const removedTaskIdx = tasks.findIndex(task => task.id === taskId)
    tasks.splice(removedTaskIdx, 1)
    this.setState({ tasks })
  }
  handleAddList = () => {
    this.setState({ listCount: this.state.listCount + 1 })
  }

  handleSelectList = idx => {
    this.setState({ selectedListIdx: idx })
  }
  render() {
    const task = this.state.tasks.filter(
      task => task.listIdx === this.state.selectedListIdx,
    )
    const taskCheck = task.filter(task => task.checked).length
    const checkedTasksCount = this.state.tasks.filter(task => task.checked)
      .length
    return (
      <div>
        <h2 style={{ marginBottom: 24 }}>Todo App</h2>
        <ul>
          {new Array(this.state.listCount).fill('').map((val, idx) => {
            const tasks = this.state.tasks.filter(task => task.listIdx === idx)
            const checkedTaskCount = tasks.filter(task => task.checked).length
            return (
              <li
                key={idx}
                onClick={() => this.handleSelectList(idx)}
                style={{
                  fontWeight:
                    idx === this.state.selectedListIdx ? 'bold' : 'normal',
                }}
              >
                List {idx + 1}({checkedTaskCount}/{tasks.length})
              </li>
            )
          })}
          <button onClick={this.handleAddList}>Add list</button>
        </ul>
        <Taskinput onTaskSubmit={this.handleTaskSubmit} />
        {task.length ? (
          <div>
            Checked: {taskCheck}/{task.length}{' '}
            {taskCheck === task.length ? 'Done!' : null}
          </div>
        ) : (
          'No tasks yet!'
        )}
        <div style={{ marginTop: 24 }}>
          {task.map((task, idx) => (
            <Taskitem
              task={task}
              key={idx}
              id={idx}
              checked={task.checked}
              onToggleChecked={checked =>
                this.handleTaskToggleChecked(task.id, checked)
              }
              onRemove={() => this.handleTaskRemove(task.id)}
            />
          ))}
        </div>
      </div>
    )
  }
}
