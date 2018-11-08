import React, { Component } from 'react';

export default class Header extends Component {
  render() {
    return (
      <div className="Header header">
        <div className="header">
          <div className="agile-top-header">
            <div className="banner-agile-top">
              <div className="clearfix"></div>
            </div>
            <div className="logo">
              <h1><a href="index.html">W$<span>Hotel</span></a></h1>
            </div>
            <div className="top-left">
              <div className="top-nav">
                <nav className="navbar navbar-default">
                  <div className="navbar-header">
                    <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                      <span className="sr-only">Toggle navigation</span>
                    </button>
                  </div>
                  <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                    <nav className="linkEffects linkHoverEffect_2">
                      <ul>
                        <li><a href="index.html" data-link-alt="inicio" className="active"><span>Inicio</span></a></li>
                        <li><a href="#services" data-link-alt="proyectos" className="scroll"><span>Proyectos</span></a></li>
                      </ul>
                    </nav>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

