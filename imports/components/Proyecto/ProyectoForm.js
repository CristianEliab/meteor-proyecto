import React, { Component } from 'react';

import DatePicker from "react-datepicker";
import moment from "moment";

class ProyectoForm extends Component {

    constructor() {
        super();
        this.state = {
            id: "",
            name: "",
            descripcion: "",
            responsable: "",
            fechaInicio: moment(),
            fechaEntrega: moment(),
            estado: "",
        }
        this.handleChangeInicio = this.handleChangeInicio.bind(this);
        this.handleChangeEntrega = this.handleChangeEntrega.bind(this);
    }

    onLimpiar(e) {
        this.setState({
            id: "",
            name: "",
            descripcion: "",
            responsable: "",
            fechaInicio: "",
            fechaEntrega: "",
            estado: ""
        });
    }
    onGuardar(e) {
        var proyectos = {
            id: this.state.id,
            name: this.state.name,
            descripcion: this.state.descripcion,
            responsable: this.state.responsable,
            fechaInicio: this.state.fechaInicio,
            fechaEntrega: this.state.fechaEntrega,
            estado: this.state.estado
        }
        e.preventDefault();
        this.props.guardar(proyectos);
        this.setState({
            id: "",
            name: "",
            descripcion: "",
            responsable: "",
            fechaInicio: "",
            fechaEntrega: "",
            estado: ""
        });
    }

    updateInput(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleChangeInicio(date) {
        this.setState({
            fechaInicio: moment(),

        });
    }

    handleChangeEntrega(date) {
        this.setState({
            fechaEntrega: moment(),
        });
    }

    render() {
        return (
            <div className="ProyectoForm col-sm-9 col-md-9 col-lg-9">
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
                        <div className="form-group">
                            <label>Descripción</label>
                            <input type="text" className="form-control" name="descripcion" value={this.state.descripcion} onChange={this.updateInput.bind(this)} />
                        </div>
                        <div className="form-group">
                            <label>Responsable</label>
                            <input type="text" className="form-control" name="responsable" value={this.state.responsable} onChange={this.updateInput.bind(this)} />
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="form-group">
                            <label>Fecha inicio</label>
                            <DatePicker selected={this.state.fechaInicio}
                                onChange={this.handleChangeInicio} />
                        </div>
                        <div className="form-group">
                            <label>Fecha entrega</label>
                            <DatePicker selected={this.state.fechaEntrega}
                                onChange={this.handleChangeEntrega} />

                        </div>
                        <div className="form-group">
                            <label>Estado</label>
                            <input type="text" className="form-control" name="estado" value={this.state.estado} onChange={this.updateInput.bind(this)} />
                        </div>
                        <div className="form-group">
                            <br></br>
                            <button className="btn btn-primary">Guardar</button>
                        </div>
                    </div>
                </form>
                <form onSubmit={this.onLimpiar.bind(this)}>
                    <button className="btn btn-secundary">Limpiar</button>
                </form>
            </div>
        );
    }
}

export default ProyectoForm;