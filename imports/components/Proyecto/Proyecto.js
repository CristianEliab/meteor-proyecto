import React, { Component } from 'react';
import ProyectoItem from './ProyectoItem'
import ProyectoForm from './ProyectoForm';

import { withTracker } from 'meteor/react-meteor-data';
import { Colleccion } from '../api/colleccion.js';

import { Meteor } from 'meteor/meteor';

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
                return <ProyectoItem key={proyecto._id} proyecto={proyecto} />
            }
        );

        return (
            <div className="Proyecto">
                <h1>Proyectos {this.props.owner}</h1>
                <div className="SearchBar p-4">
                    <label>Filtro...</label>
                    <input className="form-control" type="text" onChange={this.updateInput.bind(this)} ref="search" />
                </div>
                <ul className="list-group">
                    {proyectoList}
                </ul>
                <br></br>
                <ProyectoForm guardar={this.handleGuardar.bind(this)} />
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