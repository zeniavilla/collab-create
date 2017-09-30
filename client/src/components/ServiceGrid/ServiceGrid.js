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
import ServicesNav from '../ServicesNav/ServicesNav';

class ServiceGrid extends Component {

  componentDidMount = () => {
    this.props.getServices();
  }

  render() {
    let renderServices = this.props.services.map(service =>
      <ServiceGridItem service={service} key={service.id} />)
      
    return(
      <div>
        <Switch>
          <ServicesNav services={this.props.services} />
        </Switch>
        <Switch>
          <Route path='/services/:serviceName' component={FilteredServiceGrid} />
          <div id="wrapper" className="clearfix">
            {renderServices}
          </div>
        </Switch>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return ({ services: state.services })
}

export default connect(mapStateToProps, { getServices })(ServiceGrid);