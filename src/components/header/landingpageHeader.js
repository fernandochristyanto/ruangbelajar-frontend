import React from 'react'
import { BrowserRouter as Router, withRouter } from 'react-router-dom';

const classes = {

}
const LandingpageHeader = (props) => {
  const toLogin = (e) => {
    props.history.push('/login')
  }

  const toRegis = (e) => {
    props.history.push('/register')
  }

  return (
    <React.Fragment>
      <header style={{ display: 'flex', justifyContent: 'space-between', backgroundColor: '#289ad6', padding: '.6rem' }}>
        <div>
          <span style={{ fontWeight: 900, color: '#FFF' }}>Logo</span>
        </div>
        <div>
          <button
            onClick={toRegis}
            style={{ marginRight: '.4rem' }}>Daftar</button>
          <button
            onClick={toLogin}
          >Masuk</button>
        </div>
      </header>
    </React.Fragment>
  )
}

export default withRouter(LandingpageHeader)