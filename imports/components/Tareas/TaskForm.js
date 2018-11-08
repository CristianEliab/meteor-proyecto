import React, { Component } from 'react';

class TaskForm extends Component {

    constructor() {
        super();
        this.state = {
            id: "",
            name: "",
            descripcion: "", 
            prioridad: ""
        }
    }

    onLimpiar(e){
        this.setState({
            id: "",
            name: "",
            descripcion: "",
            prioridad: ""
        });
    }

    onGuardar(e) {
        var tasks = {
            id: this.state.id,
            name: this.state.name,
            descripcion: this.state.descripcion, 
            prioridad: this.state.prioridad
        }
        e.preventDefault();
        this.props.guardar(tasks);
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
        return (
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
                <form onSubmit={this.onLimpiar.bind(this)}>
                    <button className="btn btn-secundary">Limpiar</button>
                </form>
            </div>
        );
    }
}

export default TaskForm;