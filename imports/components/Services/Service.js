import React, { Component } from 'react';
import Tasks from '../Tareas/Tasks';
import Proyecto from '../Proyecto/Proyecto';

class Service extends Component {
    render() {
        return (
            <div className="Service">
                <div className="services" id="services">
                    <div className="container">
                        <div className="services-agile-head">
                            <h3>Proyectos</h3>
                        </div>
                        <div className="w3-agile-grids">
                            <div className="col-md-6 w3-agile-services-left">
                                <Proyecto></Proyecto>
                            </div>
                            <div className="col-md-6 w3-agile-services-right">
                                <Tasks owner="Cristian" />
                            </div>
                            <div className="clearfix"></div>
                                         
                        </div>
                    </div>
                </div>
                <p><a id="retorno" href="index.html" data-link-alt="inicio" className="active"><span>INICIO</span></a></p>     
            </div>
        );
    }
}

export default Service;
