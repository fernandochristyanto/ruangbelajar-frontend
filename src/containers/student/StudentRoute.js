import React, { Component } from 'react'
import { Switch, Route, withRouter, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import TeacherHeader from '../../components/header/TeacherHeader'
import Footer from '../../components/footer/Footer'
import StudentHome from './StudentHome'
import StudentHeader from '../../components/header/StudentHeader'
import CourseplaceDetail from './CourseplaceDetail'

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
        <StudentHeader />
        <Switch>
          <Route path={`${match.url}/home`} render={props => {
            return (
              <StudentHome
                {...props}
              />
            )
          }} />

          <Route path={`${match.url}/cp/v/:courseplaceId`} render={props => {
            return (
              <CourseplaceDetail
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