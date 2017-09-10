import React, { Component } from 'react';
import { connect } from 'react-redux';

import Service from '../components/Service';

class FilteredServices extends Component {

  render() {
    const renderServices = this.props.services.map(service =>
      <Service service={service} key={service.id} />)
      return(
        <div>
        {renderServices}
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  const serviceSlug = ownProps.match.params.serviceName;
  const serviceName = serviceSlug.split('-').map(word =>
    `${word[0].toUpperCase()}${word.slice(1)}`
  ).join(' ');
  
  return ({ services: state.services.filter(service => service.name === serviceName) })
}

export default connect(mapStateToProps)(FilteredServices);