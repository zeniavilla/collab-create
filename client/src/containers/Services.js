import React, { Component } from 'react';
import { connect } from 'react-redux';

import Service from '../components/Service';
import { getServices } from '../actions/serviceActions';
import './Services.css';

class Services extends Component {

  componentDidMount = () => {
    this.props.getServices();
  }

  render() {
    let renderServices = this.props.services.map(service =>
      <Service service={service} />)
      
    return(
      <div>
        {renderServices}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return ({ services: state.services })
}

export default connect(mapStateToProps, { getServices })(Services);