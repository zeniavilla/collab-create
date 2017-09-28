import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';

// actions
import { getServices } from '../../actions/serviceActions';

// styles
import '../../styles/components/Services.css';

// components
import ServiceGridItem from './ServiceGridItem';
import FilteredServiceGrid from '../FilteredServiceGrid/FilteredServiceGrid';


class ServiceGrid extends Component {

  componentDidMount = () => {
    this.props.getServices();
  }

  render() {
    let renderServices = this.props.services.map(service =>
      <ServiceGridItem service={service} key={service.id} />)
      
    return(
      <Switch>
        <Route path='/services/:serviceName' component={FilteredServiceGrid} />
        <div className="clearfix">
          {renderServices}
        </div>
      </Switch>
    )
  }
}

const mapStateToProps = state => {
  return ({ services: state.services })
}

export default connect(mapStateToProps, { getServices })(ServiceGrid);