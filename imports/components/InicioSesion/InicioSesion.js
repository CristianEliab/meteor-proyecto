import React, { Component } from 'react';

class InicioSesion extends Component {

    constructor() {
        super();
        this.state = {
            email: "",
            password: ""
        }
    }

    componentWillMount() {
    }

    onSesion(e){
        e.preventDefault();
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    updateInput(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    render() {

        return (
            <div className="InicioSesion">
                <div className="main" id="main">
                    <div className="w3layouts_main_grid">
                        <div className="booking-form-head-agile">
                            <h3>Iniciar de Sesión</h3>
                        </div>
                        <form action="#" method="post" className="w3_form_post" onSubmit={this.handleSignUp}>
                            <div className="w3_agileits_main_grid w3l_main_grid">
                                <div className="agileits_grid">
                                    <h5>Usuario</h5>
                                    <div className="nam">
                                        <input type="text" name="email" value={this.state.email} onChange={this.updateInput.bind(this)} placeholder="Usuario" required="" />
                                    </div>
                                    <h5>Contraseña</h5>
                                    <div className="nam1">
                                        <input type="text" name="password" value={this.state.password} onChange={this.updateInput.bind(this)} placeholder="Contraseña" required="" />
                                    </div>
                                    <div className="clearfix"></div>
                                </div>
                            </div>
                            <div className="w3_main_grid">
                                <div className="w3_main_grid_right">
                                <button id="inicioSesion" className="btn btn-secundary">Iniciar Sesión</button>
                                </div>
                                <div className="clearfix"> </div>
                            </div>
                            
                        </form>
                    </div>

                </div>
            </div>
        );
    }
}

export default InicioSesion;
