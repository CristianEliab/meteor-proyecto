import React, { Component } from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Service from '../components/Services/Service';
import Slider from '../components/Slider/Slider';
import InicioSesion from '../components/InicioSesion/InicioSesion';

import AccountsUIWrapper from './AccountsUIWrapper.js';


export default class App extends Component {


    render() {
        return (
            <div className="">
                <Header></Header>
                <Slider></Slider>
                <AccountsUIWrapper />
                <Service></Service>
                <Footer></Footer>
            </div>
        );
    }
}