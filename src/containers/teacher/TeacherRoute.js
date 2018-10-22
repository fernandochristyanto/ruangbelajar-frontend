import React, { Component } from 'react'
import { Switch, Route, withRouter, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import TeacherHome from './TeacherHome'
import CourseplaceDetail from './CourseplaceDetail'
import TeacherHeader from '../../components/header/TeacherHeader'
import Footer from '../../components/footer/Footer'
import History from './History'

class TeacherRoute extends Component {
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
              <TeacherHome
                {...props}
              />
            )
          }} />

          <Route path={`${match.url}/cp/:courseplaceId`} render={props => {
            return (
              <CourseplaceDetail
                {...props}
              />
            )
          }} />

          <Route path={`${match.url}/history`} render={props => {
            return (
              <History
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

export default withRouter(TeacherRoute);