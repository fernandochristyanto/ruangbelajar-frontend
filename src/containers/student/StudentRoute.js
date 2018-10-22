import React, { Component } from 'react'
import { Switch, Route, withRouter, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import TeacherHeader from '../../components/header/TeacherHeader'
import Footer from '../../components/footer/Footer'
import StudentHome from './StudentHome'

class StudentRoute extends Component {
  constructor(props) {
    super(props);

  }

  setSelectedMassagePlace = (massagePlace) => {
    this.setState({ ...this.state, selectedMassagePlace: massagePlace })
  }

  render() {
    const { match } = this.props;
    return (
      <div id="router">
        <TeacherHeader />
        <Switch>
          <Route path={`${match.url}/home`} render={props => {
            return (
              <StudentHome
                {...props}
              />
            )
          }} />
        </Switch>
        <Footer />
      </div>
    )
  }
}

export default withRouter(StudentRoute);