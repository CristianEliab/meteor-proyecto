import React, { Component } from 'react';
import DatePicker from 'react-date-picker';

import './proyectoForm.css';

class ProyectoForm extends Component {

    constructor() {
        super();
        this.state = {
            id: "",
            name: "",
            descripcion: "",
            responsable: "",
            fechaEntrega: new Date(),
            fechaInicio: new Date(),
            estado: "",
        }
    }

    onGuardar(e) {
        var month = this.state.fechaEntrega.getMonth() + 1;
        var day = this.state.fechaEntrega.getDate();
        var year = this.state.fechaEntrega.getFullYear();

        var mes = this.state.fechaInicio.getMonth() + 1;
        var dia = this.state.fechaInicio.getDay();
        var anio = this.state.fechaInicio.getFullYear();

        var proyectos = {
            id: this.state.id,
            name: this.state.name,
            descripcion: this.state.descripcion,
            responsable: this.state.responsable,
            fechaInicio: dia + "/" + mes + "/" + anio,
            fechaEntrega: day + "/" + month + "/" + year,
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


    onChangeInicio = fechaInicio => this.setState({ fechaInicio })

    onChangeEntrega = fechaEntrega => this.setState({ fechaEntrega })

    render() {
        return (
            <div className="ProyectoForm">
                <form onSubmit={this.onGuardar.bind(this)}>
                    <div id="columnas">
                        <div >
                            <label>ID</label>
                            <input type="text" className="form-control" name="id" value={this.state.id} onChange={this.updateInput.bind(this)} />
                        </div>
                        <div >
                            <label>Nombre</label>
                            <input type="text" className="form-control" name="name" value={this.state.name} onChange={this.updateInput.bind(this)} />
                        </div>
                        <div >
                            <label>Descripción</label>
                            <input type="text" className="form-control" name="descripcion" value={this.state.descripcion} onChange={this.updateInput.bind(this)} />
                        </div>
                        <div >
                            <label>Responsable</label>
                            <input type="text" className="form-control" name="responsable" value={this.state.responsable} onChange={this.updateInput.bind(this)} />
                        </div>
                    </div>
                    <div id="columnas2">
                        <div >
                            <label>Estado</label>
                            <input type="text" className="form-control" name="estado" value={this.state.estado} onChange={this.updateInput.bind(this)} />
                        </div>
                        <div >
                            <label>Fecha inicio</label>
                            <DatePicker type="Text" className="form-control" name="fechaInicio" value={this.state.fechaInicio} onChange={this.onChangeInicio} />
                        </div>
                        <div >
                            <label>Fecha entrega</label>
                            <DatePicker type="Text" className="form-control" name="fechaFinal" value={this.state.fechaEntrega} onChange={this.onChangeEntrega} />
                        </div>
                        <div >
                            <br></br>
                            <button className="btn btn-primary">Guardar</button>
                        </div>
                    </div>

                </form>
            </div >
        );
    }
}

export default ProyectoForm;