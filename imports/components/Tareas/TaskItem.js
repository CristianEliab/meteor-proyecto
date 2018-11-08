import React, { Component } from 'react';

class TaskItem extends Component {

  render() {
    return (
      <li className="TaskItem list-group-item">
        {this.props.task.prioridad} -- {this.props.task.name} -- {this.props.task.descripcion}
      </li>
    );
  }
}

export default TaskItem;