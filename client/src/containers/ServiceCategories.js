import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';

import { getServices } from '../actions/serviceActions';
import './Services.css';
import ServiceCategory from '../components/ServiceCategory';
import FilteredServices from '../containers/FilteredServices';


class ServiceCategories extends Component {

  componentDidMount = () => {
    this.props.getServices();
  }

  render() {
    let renderServices = this.props.services.map(service =>
      <ServiceCategory service={service} key={service.id} />)
      
    return(
      <Switch>
        <Route path='/services/:serviceName' component={FilteredServices} />
        <div>
          {renderServices}
        </div>
      </Switch>
    )
  }
}

const mapStateToProps = state => {
  return ({ services: state.services })
}

export default connect(mapStateToProps, { getServices })(ServiceCategories);