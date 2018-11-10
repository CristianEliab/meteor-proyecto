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
            // owner: Meteor.userId(),           // _id of logged in user
            // username: Meteor.user().username, // username of logged in user
        }

    }

    handleGuardar(proyecto) {
        proyecto._id = Math.random().toString(36).substring(2, 9);
        //Collection
        Meteor.call('proyecto.insert', proyecto);
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

    render() {

        var proyectoList = this.props.proyectos.filter(this.filtroNombre(this.state.nombre)).map(
            proyecto => {

                var fechas = proyecto.fechaFinal + "";
                var fecha = fechas.split("/");

                var fechaIn = proyecto.fechaInicio + "";
                var fecIni = fechaIn.split("/");

                return (
                    <li className={new Date(fecha[1] + "/" + fecha[0] + "/" + fecha[2]) < new Date() ? "Red" : ''} key ={proyecto.id}>
                        Id: {proyecto.id}
                        Nombre: {proyecto.name}
                        Responsable: {proyecto.responsable}
                        Descripción: {proyecto.descripcion}
                        Fecha Inicio: {fecIni[1]+"/"+fecIni[0]+"/"+fecIni[2]}
                        Fecha Entrega: {fecha[1]+"/"+fecha[0]+"/"+fecha[2]}
                    </li>
                );
            }
        );


        return (
            <div className="Proyecto">
            <h1>Proyectos {this.props.owner}</h1>
            <div className="">
                <ProyectoForm guardar={this.handleGuardar.bind(this)} />
            </div>
            <div className="SearchBar">
                <label>Filtro...</label>
                <input className="form-control" type="text" onChange={this.updateInput.bind(this)} ref="search" />
            </div>
            <ul className="list-group">
                {proyectoList}
            </ul>
            <br></br>
        </div>
        );
    }
}

export default withTracker(() => {

    Meteor.subscribe('proyectos');

    return {
        proyectos: Colleccion.find({}).fetch(),
        // currentUser: Meteor.user(), 
    };
})(Proyecto);