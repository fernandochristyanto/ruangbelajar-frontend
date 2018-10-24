import React from 'react'
import { BrowserRouter as Router, withRouter } from 'react-router-dom';

import logo from '../../assets/img/logo.png'
import WhiteButton from '../../components/buttons/WhiteButton'
import { connect } from 'react-redux'
import { setCurrentUser } from '../../store/actions/auth';

const StudentHeader = (props) => {
  const toHome = (e) => {
    e.preventDefault();
    props.history.push('/student/home')
  }

  const logout = (e) => {
    e.preventDefault();
    props.setCurrentUser({}, false)
    props.history.push('/')
  }

  return (
    <React.Fragment>
      <header
        style={{ display: 'flex', justifyContent: 'space-between', backgroundColor: '#289ad6', padding: '.6rem', alignItems: 'center',boxShadow: '0rem .1rem .7rem rgba(0,0,0,.6)' }}>
        <div>
          <img src={logo} width="100" alt="" />
        </div>
        <div>
          <a style={{
            color: '#FFF',
            fontWeight: 700,
            marginRight: '1rem',
            cursor: 'pointer'
          }}
            onClick={toHome}>Home</a>
          <a style={{
            color: '#FFF',
            marginRight: '1rem',
            fontWeight: 700,
            cursor: 'pointer'
          }}
            onClick={logout}>Logout</a>
        </div>
      </header>
    </React.Fragment >
  )
}

export default withRouter(connect(null, {
  setCurrentUser
})(StudentHeader))