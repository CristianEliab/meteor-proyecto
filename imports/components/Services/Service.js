import React, { Component } from 'react';
import Proyecto from '../Proyecto/Proyecto.js';

import './service.css';

class Service extends Component {
    render() {
        return (
            <div className="Service">
                <div className="services" id="services">
                    <div className="container">
                        <div className="w3-agile-grids">
                            <div className="col-md-6 w3-agile-services-left">
                                <Proyecto></Proyecto>
                              
                            </div>
                        </div>
                    </div>
                </div>  
            </div>
        );
    }
}

export default Service;
