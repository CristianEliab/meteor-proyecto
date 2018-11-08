import React, { Component } from 'react';


class ProyectoItem extends Component {

    render() {
        return (
            <li className="ProyectoItem list-group-item {this.props.proyecto.fechaInicio > new Date ? Blue : Red}">
                {this.props.proyecto.name} -- {this.props.proyecto.responsable}  -- {this.props.proyecto.descripcion} -- {this.props.proyecto.fechaInicio} -- {this.props.proyecto.fechaEntrega}
            </li>
        );
    }
}

export default ProyectoItem;