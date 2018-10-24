import React, { Component } from 'react'
import { Switch, Route, withRouter, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import TeacherHeader from '../../components/header/TeacherHeader'
import Footer from '../../components/footer/Footer'
import AdminHome from './AdminHome'
import TeacherRequesterDetail from './TeacherRequesterDetail'
import AdminHeader from '../../components/header/AdminHeader'

class AdminRoute extends Component {
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
        <AdminHeader />
        <Switch>
          <Route path={`${match.url}/home`} render={props => {
            return (
              <AdminHome
                {...props}
              />
            )
          }} />

          <Route path={`${match.url}/v/teacher/:teacherId`} render={props => {
            return (
              <TeacherRequesterDetail
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

export default withRouter(AdminRoute);