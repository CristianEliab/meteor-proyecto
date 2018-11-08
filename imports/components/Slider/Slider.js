import React, { Component } from 'react';

class Slider extends Component {
    render() {
        return (
            <div className="Slider">
                <div className="slider">
                    <div className="callbacks_container">
                        <ul className="rslides" id="slider">
                            <li>
                                <div className="slider-info">

                                </div>
                            </li>
                        </ul>
                        <div className="modal fade" id="myModal1" tabIndex="-1" role="dialog">
                            <div className="modal-dialog">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <button type="button" className="close" data-dismiss="modal">&times;</button>
                                        <h4>Hola</h4>
                                        <img src="images/popup.jpg" alt=" " className="img-responsive" />
                                        <p>Hola.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="clearfix"></div>
                </div>
            </div>
        );
    }
}

export default Slider;