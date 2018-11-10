import React, { Component } from 'react';
import TaskItem from './TaskItem'
import TaskForm from './TaskForm';
import { withTracker } from 'meteor/react-meteor-data';
import { Colleccion } from '../api/colleccion.js';

class Tasks extends Component {
    constructor() {
        super();
    }

    handleGuardar(task) {
        task._id = Math.random().toString(36).substring(2,9);
        //Collection
        Meteor.call('tarea.insert',task);
    }


    render() {
        var tasksList = this.props.tasks.map(
            task => {
                return <TaskItem  key={task._id} task={task} />
            }
        );
        return (
            <div className="Tasks">
                <h1>Las Tareas del Proyecto {this.props.owner}</h1>
                <ul className="list-group">
                    {tasksList}
                </ul>
                <br></br>
                <TaskForm guardar={this.handleGuardar.bind(this)} />
            </div>
        );
    }
}

export default withTracker(() => {
    Meteor.subscribe('tasks');
    console.log(Colleccion.find({}).fetch());
    return {
        tasks: Colleccion.find({}).fetch(),
    };
})(Tasks);
