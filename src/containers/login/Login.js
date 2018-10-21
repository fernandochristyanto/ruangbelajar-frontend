import React, { Component } from 'react'
import LandingpageHeader from '../../components/header/landingpageHeader'
import Footer from '../../components/footer/Footer'
import BlueButton from '../../components/buttons/BlueButton'

class Login extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <React.Fragment>
        <LandingpageHeader />
        <section>
          <div>
            <form action="">
              <h2 style={{ textAlign: 'center', color: '#289ad6' }}>Hi, Welcome to RuangBelajar.com</h2>
              <div style={{ maxWidth: '600px', margin: 'auto' }}>
                <div style={{ color: '#289ad6' }}>
                  <label htmlFor="email">Email</label>
                  <input type="text" id="email" name="email" style={{ display: 'block', borderRadius: '5px', width: '100%', border: '2px solid #289ad6', outline:'none', padding: '2px' }} />
                </div>
                <div style={{ margin: '1rem 0', color: '#289ad6' }}>
                  <label htmlFor="password">Password</label>
                  <input type="password" id="password" name="password" style={{ display: 'block', borderRadius: '5px', width: '100%', border: '2px solid #289ad6', outline:'none', padding: '2px' }} />
                </div>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                  <BlueButton
                    buttonText="Masuk"
                  />
                </div>
              </div>
            </form>
            <p style={{ textAlign: 'center', color: '#289ad6' }}>Belum punya account? <a style={{ color: 'red', cursor: 'pointer' }}>Daftar Disini</a></p>
          </div>
        </section>
        <Footer />
      </React.Fragment>
    )
  }
}

export default Login