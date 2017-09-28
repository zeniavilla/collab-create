import React, { Component } from 'react';
import { connect } from 'react-redux';

import FilteredServiceGridItem from './FilteredServiceGridItem';

class FilteredServiceGrid extends Component {

  render() {
    const renderServices = this.props.services.map(service =>
      <FilteredServiceGridItem service={service} key={service.id} />)
      return(
        <div className="clearfix">
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

export default connect(mapStateToProps)(FilteredServiceGrid);