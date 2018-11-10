import React, { Component } from 'react';

import Service  from '../../components/Services/Service.js';
import Footer  from '../../components/Footer/Footer.js';

export default class MainPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: ''
    };
  }

  render() {
    let currentUser = this.props.currentUser;
    let userDataAvailable = (currentUser !== undefined);
    let loggedIn = (currentUser && userDataAvailable);
    return (
      <div>
        <div className="MainPage">
          <h1 className="text-center">
            {loggedIn ? 'Hola ' + currentUser.username : ''}
            <Service></Service>
            <Footer></Footer>
          </h1>
        </div>
      </div>
    );
  }
}

MainPage.propTypes = {
  // username: React.PropTypes.string,
}