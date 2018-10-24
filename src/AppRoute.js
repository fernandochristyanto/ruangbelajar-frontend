import React, { Component } from 'react'
import { Switch, Route, withRouter, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import Landingpage from './containers/Landingpage'
import Login from './containers/login/Login'
import Teacher from './containers/teacher/Teacher'
import Student from './containers/student/Student'
import Admin from './containers/admin/Admin'

const AppRoute = props => {
  return (
    <div id="router" style={{ position: 'relative', minHeight: '100vh', paddingBottom:'12rem' }}>
      <Switch>
        <Route exact path="/" render={props => <Landingpage {...props} />} />
        <Route path='/login' render={props => <Login {...props} />} />
        <Route path='/teacher' render={props => <Teacher {...props} />} />
        <Route path='/student' render={props => <Student {...props} />} />
        <Route path='/admin' render={props => <Admin {...props} />} />
      </Switch>
    </div>
  )
}

function mapStateToProps(reduxState) {
  return {
    currentUser: reduxState.currentUser,
    error: reduxState.error
  }
}

function mapDispatcherToProps() {
  return {

  }
}

// export default withRouter(connect(mapStateToProps, mapDispatcherToProps())(AppRoute))
export default withRouter(AppRoute)