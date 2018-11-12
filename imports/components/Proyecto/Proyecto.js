import React, { Component } from 'react';
import ProyectoForm from './ProyectoForm';
import Tasks from '../Tareas/Tasks.js';
import { withTracker } from 'meteor/react-meteor-data';
import { Colleccion } from '../../api/colleccion.js';

import { Meteor } from 'meteor/meteor';
import './proyecto.css';

class Proyecto extends Component {

    constructor() {
        super();
        this.state = {
            nombre: '',
            tareas: [],
            id_Proyecto: "",
        }

    }

    handleGuardar(proyecto) {
        proyecto._id = Math.random().toString(36).substring(2, 9);
        //Collection
        Meteor.call('proyecto.insert', proyecto);
    }

    handleUpdate(tarea) {
        tarea._id = Math.random().toString(36).substring(2, 9);
        var projecto;

        var proyectoList = this.props.proyectos.filter(this.filtroNombre(this.state.nombre)).map(
            proyecto => {
                if (proyecto.id == tarea.id)
                    return (
                        projecto = proyecto
                    );
            }
        );
        console.log(projecto);
        console.log(tarea + "paso");
        Meteor.call('proyectos.update', projecto, tarea);
    }

    filtroNombre(nombre) {
        return function (x) {
            return x.name.toLowerCase().includes(nombre.toLowerCase()) || !nombre;
        }
    }

    updateInput(e) {
        this.setState({
            nombre: e.target.value
        });
    }

    onVerTareas(e) {

    }


    render() {
        var numero = 0;

        var proyectoList = this.props.proyectos.filter(this.filtroNombre(this.state.nombre)).map(
            proyecto => {
                var fechas = proyecto.fechaEntrega + "";
                var fecha = fechas.split("/");
                var fechaIn = proyecto.fechaInicio + "";
                var fecIni = fechaIn.split("/");

                var tareasList = proyecto.tareas.map(
                    tareas => {
                        numero++;
                        return (
                            <li key={tareas.id}>
                                Tarea Numero_{numero}<br></br>
                                Id: {tareas.id} <br></br>
                                Name: {tareas.name} <br></br>
                                Descripcion: {tareas.descripcion} <br></br>
                                Prioridad: {tareas.prioridad} <br></br>
                            </li>
                        );
                    }
                );
                console.log(tareasList);
                console.log("hola");
                return (
                    <div key={proyecto.id}>
                        {
                            this.props.usuario.username == proyecto.responsable ?
                                <form onSubmit={this.onVerTareas.bind(this)}>
                                    <li className={new Date(fecha[1] + "/" + fecha[0] + "/" + fecha[2]) < new Date() ? "Red list-group-item" : "list-group-item"} key={proyecto.id} value={this.state.id_Proyecto}>
                                        Id: {proyecto.id} <br></br>
                                        Nombre: {proyecto.name} <br></br>
                                        Responsable: {proyecto.responsable} <br></br>
                                        Descripción: {proyecto.descripcion} <br></br>
                                        Fecha Inicio: {fecIni[1] + "/" + fecIni[0] + "/" + fecIni[2]} <br></br>
                                        Fecha Entrega: {fecha[1] + "/" + fecha[0] + "/" + fecha[2]} <br></br>
                                    </li>
                                    Tareas del proyecto
                                    <ul>
                                        {tareasList}
                                    </ul>

                                </form>
                                : <div>
                                    <li className="Red list-group-item" key={proyecto.id} >
                                        El responsable es diferente al logeado <br></br>
                                    </li>
                                </div> 
                        }
                    </div>
                )

            }
        );



        return (
            <div className="Proyecto">
                <div className="ProyectForm">
                    <div className="">
                        <ProyectoForm guardar={this.handleGuardar.bind(this)} />
                    </div>
                </div>
                <div className="container Proyecto-distribucion">
                    <div className="columnas-left">
                        <div className="SearchBar">
                            <label>Filtro...</label>
                            <input className="form-control" type="text" onChange={this.updateInput.bind(this)} ref="search" />
                            <ul className="list-group">
                                {proyectoList}
                            </ul>
                        </div>
                    </div>
                    <div className="columnas-right">
                        <Tasks guardarTarea={this.handleUpdate.bind(this)}></Tasks>
                    </div>
                </div>

                <br></br>
            </div>
        );
    }
}

export default withTracker(() => {
    Meteor.subscribe('proyectos');
    return {
        proyectos: Colleccion.find({}).fetch(),
        usuario: Meteor.user(),
    };
})(Proyecto);