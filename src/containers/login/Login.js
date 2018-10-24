import React, { Component } from 'react'
import LandingpageHeader from '../../components/header/landingpageHeader'
import Footer from '../../components/footer/Footer'
import BlueButton from '../../components/buttons/BlueButton'
import { connect } from 'react-redux'
import { signinUser } from '../../store/actions/auth'
import { withRouter } from 'react-router-dom';

class Login extends Component {
  constructor(props) {
    super(props)

    this.state = {
      email: '',
      password: ''
    }
  }

  handleChange = (event) => {
    this.setState({ ...this.state, [event.target.name]: event.target.value })
  }

  doLogin = (event) => {
    event.preventDefault()
    this.props.signinUser({
      email: this.state.email,
      password: this.state.password
    })
      .then(res => {
        switch (res.role) {
          case "teacher":
            this.props.history.push('/teacher/home')
            break;
          case "student":
            this.props.history.push('/student/home')
            break;
          case "admin":
            this.props.history.push('/admin/home')
          default:
            break;
        }
      })
      .catch(err => {
        console.log(err)
      })
  }

  render() {
    return (
      <React.Fragment>
        <LandingpageHeader />
        <section style={{marginTop:'4rem'}}>
          <div>
            <form action="">
              <h2 style={{ textAlign: 'center', color: '#289ad6' }}>Hi, Welcome to RuangBelajar.com</h2>
              <div style={{ maxWidth: '600px', margin: 'auto' }}>
                <div style={{ color: '#289ad6' }}>
                  <label htmlFor="email">Email</label>
                  <input type="text" id="email" name="email" style={{ display: 'block', borderRadius: '5px', width: '100%', border: '2px solid #289ad6', outline: 'none', padding: '2px' }} onChange={this.handleChange} />
                </div>
                <div style={{ margin: '1rem 0', color: '#289ad6' }}>
                  <label htmlFor="password">Password</label>
                  <input type="password" id="password" name="password" style={{ display: 'block', borderRadius: '5px', width: '100%', border: '2px solid #289ad6', outline: 'none', padding: '2px' }} onChange={this.handleChange} />
                </div>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                  <BlueButton
                    buttonText="Masuk"
                    onClick={this.doLogin}
                  />
                </div>
              </div>
            </form>
            <p style={{ textAlign: 'center', color: '#289ad6', marginTop:'1rem' }}>Belum punya account? <a style={{ color: 'red', cursor: 'pointer' }}>Daftar Disini</a></p>
          </div>
        </section>
        <Footer />
      </React.Fragment>
    )
  }
}

export default withRouter(connect(null, {
  signinUser
})(Login))