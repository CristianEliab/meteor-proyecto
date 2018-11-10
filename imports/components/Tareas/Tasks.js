import React, { Component } from 'react';
import TaskItem from './TaskItem'
import TaskForm from './TaskForm';
import { withTracker } from 'meteor/react-meteor-data';
import { Colleccion } from '../../api/colleccion.js';

class Tasks extends Component {
    constructor() {
        super();
        this.state = {
            id: "",
            name: "",
            descripcion: "",
            prioridad: ""
        }
    }

    onGuardar(e) {
        var tasks = {
            id: this.state.id,
            name: this.state.name,
            descripcion: this.state.descripcion,
            prioridad: this.state.prioridad
        }
        e.preventDefault();
        this.props.guardarTarea(tasks);
        this.setState({
            id: "",
            name: "",
            descripcion: "",
            prioridad: ""
        });
    }

    updateInput(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }



    render() {
        var tasksList = this.props.tasks.map(
            task => {
                return <TaskItem key={task._id} task={task} />
            }
        );
        return (
            <div className="Tasks">
                <h1>Las Tareas del Proyecto {this.props.owner}</h1>
                <ul className="list-group">
                    {tasksList}
                </ul>
                <br></br>
                <div className="TaskForm">
                    <form onSubmit={this.onGuardar.bind(this)}>
                        <div className="col-sm-6">
                            <div className="form-group">
                                <label>ID</label>
                                <input type="text" className="form-control" name="id" value={this.state.id} onChange={this.updateInput.bind(this)} />
                            </div>
                            <div className="form-group">
                                <label>Nombre</label>
                                <input type="text" className="form-control" name="name" value={this.state.name} onChange={this.updateInput.bind(this)} />
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="form-group">
                                <label>Descripción</label>
                                <input type="text" className="form-control" name="descripcion" value={this.state.descripcion} onChange={this.updateInput.bind(this)} />
                            </div>
                            <div className="form-group">
                                <label>Prioridad</label>
                                <input type="text" className="form-control" name="prioridad" value={this.state.prioridad} onChange={this.updateInput.bind(this)} />
                            </div>
                        </div>
                        <button className="btn btn-primary">Guardar</button>
                    </form>
                </div>
            </div>

        );
    }
}

export default withTracker(() => {
    // Meteor.subscribe('tasks');
    console.log(Colleccion.find({}).fetch());
    return {
        tasks: Colleccion.find({}).fetch(),
    };
})(Tasks);
