import React, { Component } from 'react';
import { connect } from 'react-redux'

import { Route, Switch } from 'react-router-dom';
import TeacherRoute from './TeacherRoute';

class Teacher extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { match } = this.props;
    const { navRoutes } = this.props;
    return (
      <React.Fragment>
        <div>
          <TeacherRoute
            {...this.props}
          />
        </div>
      </React.Fragment>
    );
  }
}

export default Teacher;
