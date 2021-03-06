import React, { Component } from 'react'
import LandingpageHeader from '../../components/header/landingpageHeader'
import Footer from '../../components/footer/Footer'
import { apiCall } from '../../services/api';
import dummyStudentImg from '../../assets/img/steve_jobs_PNG2.png'
import dummyCoursePlaceImg from '../../assets/img/3-3.jpg'

import BlueButton from '../../components/buttons/BlueButton'

import banner from '../../assets/img/banner.png'

class StudentHome extends Component {
  constructor(props) {
    super(props)

    this.state = {
      coursePlaces: undefined,
      teachers: undefined
    }
  }

  renderCoursePlacesToDivs(coursePlaces) {
    if (coursePlaces) {
      return coursePlaces.map(coursePlace => (
        <div style={{ backgroundColor: '#FFF', padding: '.6rem', width: '400px', borderRadius: '5px', margin: '5px', boxShadow: '.1rem .1rem .7rem rgba(0,0,0,.8)' }}>
          <h2>{coursePlace.name}</h2>
          <div style={{ display: 'flex' }}>
            <img src={dummyCoursePlaceImg} width="300" alt="" />
          </div>
          <p style={{ color: '#289ad6' }}>{coursePlace.description.length > 50 ? coursePlace.description.substr(0, 200) + "....." : coursePlace.description}
          </p>
          <BlueButton
            buttonText="See More"
            onClick={() => this.props.history.push(`cp/v/${coursePlace._id}`)} />
        </div>
      ))
    }
  }

  renderTeachersToDivs(students) {
    if (students) {
      return students.map(student => (
        <div style={{ backgroundColor: '#FFF', padding: '.6rem', width: '400px', borderRadius: '5px', margin: '5px', boxShadow: '.1rem .1rem .7rem rgba(0,0,0,.8)' }}>
          <div style={{ display: 'flex' }}>
            <div style={{ marginRight: '10px' }}>
              <img src={dummyStudentImg} alt="" width="100" />
            </div>
            <div>
              <h2>{student.name}</h2>
              <BlueButton
                buttonText="See More" />
            </div>
          </div>
        </div>
      ))
    }
  }

  render() {
    return (
      <React.Fragment>
        <div style={{ padding: '2rem 2rem' }}>
          <div style={{ display: 'flex' }}>
            <img src={banner} alt="" style={{ width: '850px', boxShadow: '.1rem .1rem .7rem rgba(0,0,0,.8)' }} />
            <div style={{ padding: '1rem' }}>
              <h1>Mulai belajar hari ini dengan <b>Ruang Belajar</b></h1>
              <div style={{ borderLeft: '7px solid #289ad6', marginLeft: '2rem', paddingLeft: '1rem' }}>
                <p>Dengan ruang belajar, anda dapat :</p>
                <ul>
                  <li>Mendapatkan guru yang terjamin kualitasnya</li>
                  <li>Standar akreditasi tempat les terjamin</li>
                  <li>Murid murid yang terdaftar dijamin aktif</li>
                  <li>Pengecekan kualitas rutin terhadap para guru</li>
                  <li>Pendaftaran dan proses belajar yang dipermudah</li>
                </ul>
              </div>
            </div>
          </div>
          <section style={{ marginTop: '2.5rem', boxShadow: '.1rem .1rem .7rem rgba(0,0,0,.8)' }}>
            <div style={{ backgroundColor: '#289ad6', padding: '1.4rem' }}>
              <div>
                <h1 style={{ color: '#FFF' }}>Tempat Les</h1>
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', marginTop: '.5rem' }}>
                {this.state.coursePlaces &&
                  this.renderCoursePlacesToDivs(this.state.coursePlaces)
                }
              </div>
            </div>
          </section>
          <section style={{ marginTop: '2.5rem' }}>
            <h1 style={{ textAlign: 'right', color: '#289ad6' }}>Guru</h1>
            <div style={{ backgroundColor: '#289ad6', display: 'flex', flexWrap: 'wrap', padding: '1.4rem', boxShadow: '.1rem .1rem .7rem rgba(0,0,0,.8)' }}>
              {this.state.teachers &&
                this.renderTeachersToDivs(this.state.teachers)
              }
            </div>
          </section>
        </div>
      </React.Fragment>
    )
  }

  componentWillMount() {
    apiCall('get', '/api/coursePlace')
      .then(res => {
        this.setState({ ...this.state, coursePlaces: res })
      })
    apiCall('get', '/api/user/getAllByRole?role=teacher')
      .then(res => {
        this.setState({ ...this.state, teachers: res })
      })
  }
}

export default StudentHome