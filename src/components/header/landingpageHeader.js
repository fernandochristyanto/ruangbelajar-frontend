import React from 'react'
import { BrowserRouter as Router, withRouter } from 'react-router-dom';

import logo from '../../assets/img/logo.png'
import WhiteButton from '../../components/buttons/WhiteButton'
const LandingpageHeader = (props) => {
  const toLogin = (e) => {
    props.history.push('/login')
  }

  const toRegis = (e) => {
    props.history.push('/register')
  }

  return (
    <React.Fragment>
      <header style={{ display: 'flex', justifyContent: 'space-between', backgroundColor: '#289ad6', padding: '.6rem', alignItems: 'center' }}>
        <div>
          <img src={logo} width="100" alt="" />
        </div>
        <div>
          <WhiteButton
            buttonText="Daftar"
            onClick={toRegis}
            style={{ marginRight: '10px' }} />
          <WhiteButton
            buttonText="Masuk"
            onClick={toLogin} />
        </div>
      </header>
    </React.Fragment >
  )
}

export default withRouter(LandingpageHeader)