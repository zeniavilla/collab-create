import React, { Component } from 'react';
import { connect } from 'react-redux';

import './App.css';
import Services from './Services';

class App extends Component {
  render() {
    return(
      <div>
        <Services services={this.props.services} />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return ({ services: state.services })
}

export default connect (mapStateToProps)(App);