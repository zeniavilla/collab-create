import React, { Component } from 'react';
import { connect } from 'react-redux';

import ServiceCategory from '../components/ServiceCategory';
import { getServices } from '../actions/serviceActions';
import './Services.css';

class ServiceCategories extends Component {

  componentDidMount = () => {
    this.props.getServices();
  }

  render() {
    let renderServices = this.props.services.map(service =>
      <ServiceCategory service={service} />)
      
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

export default connect(mapStateToProps, { getServices })(ServiceCategories);