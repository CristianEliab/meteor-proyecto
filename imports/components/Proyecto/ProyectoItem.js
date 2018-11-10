import React, { Component } from 'react';

import './proyectoItem.css';

class ProyectoItem extends Component {

    render() {

        var fechas = task.fechaFinal+"";
        var fecha = fechas.split("/");

        return (
            <li className={new Date(fecha[1]+"/"+fecha[0]+"/"+fecha[2]) < new Date() ? "Red" : ''}>
                {this.props.proyecto._id}
                {this.props.proyecto.name}
                {this.props.proyecto.responsable}
                {this.props.proyecto.descripcion}
                {this.props.proyecto.fechaInicio}
                {this.props.proyecto.fechaEntrega}
            </li>
        );
    }
}

export default ProyectoItem;